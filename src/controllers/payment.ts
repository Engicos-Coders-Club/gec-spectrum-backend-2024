import {StatusCodes} from 'http-status-codes'
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import { Team } from '../models/Team.js';
import cloudinary from 'cloudinary'

export const checkPaymentStatus = async(req:Request,res:Response)=>{
    const {teamId} = req.params
    const team = await Team.findById(teamId)
    if(!team)
        throw new NotFoundError(`No event with id ${teamId}`)
    res.status(StatusCodes.OK).json({"payment_status":team.paid})
}

export const updatePaymentStatus = async(req:Request,res:Response)=>{
    const {teamId} = req.params
    const team = await Team.findByIdAndUpdate(teamId,{paid:true})
    if(!team)
        throw new NotFoundError(`No event with id ${teamId}`)
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