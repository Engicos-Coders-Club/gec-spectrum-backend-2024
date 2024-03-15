import { Event } from '../models/Event.js';
import { Department } from '../models/Department.js';
import { Team } from '../models/Team.js';
import {StatusCodes} from 'http-status-codes'
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import cloudinary from "cloudinary";

interface EventInfo {
    eventId:string;
    eventName: string;
    date: Date;
    department: string;
    imageUrl:string;
}

export const addEvent = async(req:Request,res:Response)=>{
    const {eventName,fee,introduction,prices,date,teamSize,contact,rulesAndRegulations,departmentId} = req.body

    if(!eventName || !introduction || !prices || !date || !teamSize || !contact || !rulesAndRegulations || !departmentId || !fee)
        throw new BadRequestError("All event fields were not provided")

    const dep = await Department.find({_id:departmentId})
    if(dep.length === 0)
        throw new NotFoundError("Invalid department id")
    
    
    await Event.create(req.body)
    res.status(StatusCodes.OK).json({msg:"Event Added"})
}

export const updateEvent = async(req:Request,res:Response)=>{
    const {id} = req.params;
    await Event.findByIdAndUpdate(id,req.body,{new:true})
    res.status(StatusCodes.OK).json({msg:"Event Updated"})
}

export const deleteEvent = async(req:Request,res:Response)=>{
    const {id} = req.params;
    await Event.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({msg:"Event Deleted"})
}

export const getSingleEvent = async(req:Request,res:Response)=>{
    const {id} = req.params
    const event = await Event.findById(id)
    res.status(StatusCodes.OK).json({event})
}

export const getDepartmentEvents = async(req:Request,res:Response)=>{
    const {id} = req.params
    const temp = await Department.find({_id:id})
    if(temp.length === 0)
        throw new NotFoundError("Invalid department id")
    const ls:EventInfo[] = []
    const events = await Event.find({departmentId:id})
    events.forEach((item)=>{
        ls.push({
            'eventId':item._id,
            'eventName':item.eventName,
            'date':item.date,
            'department':item.departmentId,
            'imageUrl':item.imageURL
        })
    })
    res.status(StatusCodes.OK).json({"events":ls})
}

export const getAllEvents = async(req:Request,res:Response)=>{
    const ls:EventInfo[] = []
    const events = await Event.find({})
    events.forEach((item)=>{
        ls.push({
            'eventId':item._id,
            'eventName':item.eventName,
            'date':item.date,
            'department':item.departmentId,
            'imageUrl':item.imageURL
        })
    })
    res.status(StatusCodes.OK).json({"events":ls})
}

export const addImage = async(req:Request,res:Response)=>{
    const {eventId} = req.params
    // wont save image if event does not exist
    await Event.findById(eventId)
    const file = req.file as Express.Multer.File
    const dataUrl = `data:image/jpeg;base64,${file.buffer.toString('base64')}`;
    const result = await cloudinary.v2.uploader.upload(dataUrl, { resource_type: "image" });
    
    // storing url in db
    await Event.findByIdAndUpdate(eventId,{imageURL:result.secure_url},{new:true})

    res.status(StatusCodes.OK).json({ url: result.secure_url, public_id: result.public_id })
}


