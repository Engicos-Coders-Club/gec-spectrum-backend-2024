import { Coordinator } from '../models/Coordinator.js';
import { Department } from '../models/Department.js';
import { Participants } from '../models/Participant.js';
import { Team } from '../models/Team.js';
import {StatusCodes} from 'http-status-codes'
import { verifyPaymentSignature } from '../payments/index.js';
import { departmentNameById } from '../helper/utils.js';
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import jwt from 'jsonwebtoken'
import { sendOtpEmail } from '../helper/email-otp/index.js';
import { generateOtp } from '../helper/otpGenerator.js';
import { config } from 'dotenv';
config();



  
export const registerCoordinator = async(req:Request,res:Response)=>{
    const {email,contact,department} = req.body

    if(!email || !contact || !department)
        throw new BadRequestError("'email' 'contact' 'department' cannot be empty")

    const dept = await Department.find({_id:department});
    if(dept.length === 0)
        throw new NotFoundError(`No department with id ${department}`)
    
    await Coordinator.create({email,contact,department})
    res.status(StatusCodes.OK).json({msg:"Coordinator Added"})
}

export const loginCoordinator = async(req:Request,res:Response)=>{
    const {email,key} = req.body;
    
    const user = await Coordinator.findOne({email:email})
    if(!user){
        throw new UnauthenticatedError('Invalid Email')
    }
    const passCorrect = user.comparePassword(key)
    if(!passCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT();
    
    const userDept = departmentNameById[`${user.department}`];

    res.status(StatusCodes.OK).json({token, user, userDept});
}

export const loginAdmin = async(req:Request,res:Response)=>{
    const {admin_key} = req.body

    if(!admin_key)
        throw new BadRequestError("Admin Key 'admin_key' was not provided")

    if(admin_key != process.env.ADMIN)
        throw new UnauthenticatedError("Invalid admin key")
        
    const test = process.env.JWT_SECRET || null;
    let token:string = "";
    
    if(test !== null)
        token = jwt.sign({isAdmin:true},test,{expiresIn:process.env.JWT_LIFETIME})
    else
        throw new NotFoundError(".env file not found")
    
    res.status(StatusCodes.OK).json({token});
}

export const sendOtp = async(req:Request,res:Response)=>{

    const { email, contact, message } = req.body;

    if(!email)
        throw new BadRequestError("'email' should be given as query params")

    const otp = generateOtp(); 

    const temp = await Participants.find({email:email})
    console.log(email)
    if(temp.length > 0){

        sendOtpEmail(email,otp, message)
        await Participants.findOneAndUpdate({email},{otp:otp});

    }else{

        if (!contact)
        throw new BadRequestError("'contact' should be given as query params")
        
        sendOtpEmail(email, otp, message); // Implement this function
        await Participants.create({email,contact,otp});

    }
    res.status(StatusCodes.OK).json({msg:"OTP sent"});
}

export const verifyOtp = async(req:Request,res:Response)=>{

    const { email, otp } = req.body;
    const participant = await Participants.findOne({email});
    if(!participant)
    throw new NotFoundError("Invalid email")
    
    if(participant.otp !== otp)
    throw new UnauthenticatedError("Invalid OTP")

    await Participants.findOneAndUpdate({email},{verified:true});
    
    res.status(StatusCodes.OK).json({msg:"OTP verified"});
}


