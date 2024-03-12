import { Coordinator } from '../models/Coordinator.js';
import { Department } from '../models/Department.js';
import {StatusCodes} from 'http-status-codes'
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import jwt from 'jsonwebtoken'
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
    res.status(StatusCodes.OK).json({token});
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