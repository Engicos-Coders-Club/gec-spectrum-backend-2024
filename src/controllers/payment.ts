import {StatusCodes} from 'http-status-codes'
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import { Team } from '../models/Team.js';
import { sendOtpEmail } from '../helper/email-otp/index.js';
import cloudinary from 'cloudinary'

export const checkPaymentStatus = async(req:Request,res:Response)=>{
    const {teamId} = req.params
    const team = await Team.findById(teamId)
    if(!team)
        throw new NotFoundError(`No event with id ${teamId}`)
    res.status(StatusCodes.OK).json({"payment_status":team.paid})
}

export const updatePaymentStatus = async(req:Request,res:Response)=>{
    const {teamId, eventName} = req.params
    const team = await Team.findByIdAndUpdate(teamId,{paid:true})
    const teamName = team?.teamName;
    const teamLeaderEmail = team?.leader as string;
    //finds the email of the team leader and sends them an email confirming their entry
    //by sending an email like sendOtpEmail(email=teamLeaderEmail, name=teamName, message="Your payment has been successfull and your team ${teamName} has succesfully been added as a team", subject="Payment Confirmation For ${eventName}");
    sendOtpEmail(teamLeaderEmail, teamName, `Your payment has been successfull and your team ${teamName} has succesfully been registered`, `Payment Confirmation For ${eventName}`)
    
    if(!team)
        throw new NotFoundError(`No team with id ${teamId}`)
    res.status(StatusCodes.OK).json({"msg":"Payment Status Updated"})
}
export const uploadPaymentReceipt = async(req:Request,res:Response)=>{
    const {teamId} = req.params
    // wont save image if event does not exist
    const team = await Team.findById(teamId)

    if(!team)
        throw new NotFoundError(`No team with id ${teamId}`)
    
    const file = req.file as Express.Multer.File
    const dataUrl = `data:image/jpeg;base64,${file.buffer.toString('base64')}`;
    const result = await cloudinary.v2.uploader.upload(dataUrl, { resource_type: "image" });
    
    // storing url in db
    await Team.findByIdAndUpdate(teamId,{payment_screenshot:result.secure_url})
    res.status(StatusCodes.OK).json({msg:"payment receipt uploaded"})
}