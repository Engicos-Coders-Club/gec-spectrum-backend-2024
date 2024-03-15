import { Event } from '../models/Event.js';
import { Department } from '../models/Department.js';
import {StatusCodes} from 'http-status-codes'
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import { Participants } from '../models/Participant.js';
import { Team } from '../models/Team.js';
import cloudinary from "cloudinary";

interface participantInfo{
    email:string
    name:string
    contact:string
    idcard:string
}
export const createTeam = async(req:Request,res:Response)=>{
    const {teamName,eventId,leader,participants} = req.body
    if(!teamName || !eventId || !leader || !participants)
        throw new BadRequestError("'teamName' 'eventId' 'leader' 'participants' cannot be empty")

    const event = await Event.findOne({_id:eventId})
    if(!event)
        throw new NotFoundError(`No event with id ${eventId}`)

    if(event.teamSize != participants.length)
        throw new BadRequestError("'participants' must be equal to team size for event")

    const emails = participants.map((participant:participantInfo) => participant.email);
    if(!emails.includes(leader))
        throw new BadRequestError("Leader should be part of team")

    participants.forEach(async(ele:participantInfo)=>{
        if(!ele.email || !ele.name || !ele.contact ||!ele.idcard)
            throw new BadRequestError("'email' 'name' 'contact' 'idcard' cannot be empty inside participants")
        if(!ele.idcard.startsWith('data:image/'))
            throw new BadRequestError('idcard must be base64 encoded')

        const temp = await Participants.find({email:ele.email})
        if(temp.length == 0){
            const result = await cloudinary.v2.uploader.upload(ele.idcard, { resource_type: "image" });
            await Participants.create({email:ele.email,name:ele.name,idcard:result.secure_url,contact:ele.contact})
        }
        await Participants.findOneAndUpdate({email:ele.email},{ $push: { events: eventId } })
    })
    
    await Team.create({teamName,eventId,leader,participants:emails})
    
    res.status(StatusCodes.OK).json({msg:"Team Added"})
}
export const getTeams = async(req:Request,res:Response)=>{
    const {eventId} = req.params
    const department = req.user?.department
    const isAdmin = req.user?.isAdmin

    const event = await Event.findById(eventId)
    if(!event)
        throw new NotFoundError(`No event with id ${eventId}`)

    if(department != event.departmentId && !isAdmin)
        throw new UnauthenticatedError("You do not belong to the department of this event")
    
    const teams = await Team.find({eventId:eventId})
    res.status(StatusCodes.OK).json(teams)
}

export const getTeam = async(req:Request,res:Response)=>{
    const {teamId} = req.params
    const department = req.user?.department
    const isAdmin = req.user?.isAdmin

    if(!department && !isAdmin)
        throw new UnauthenticatedError("You dont have authority to perform this action")
    
    const team = await Team.find({_id:teamId})
    if(team.length === 0)
        throw new NotFoundError(`No team with id ${teamId}`)
    res.status(StatusCodes.OK).json({"team":team[0]})
}

export const getParticipant = async(req:Request,res:Response)=>{
    const {email} = req.body
    if(!email)
        throw new BadRequestError("'email' should be given as query params")

    const participant = await Participants.findOne({email:email})
    if(!participant)
        throw new NotFoundError(`No participant with email ${email}`)
    res.status(StatusCodes.OK).json(participant)
}



