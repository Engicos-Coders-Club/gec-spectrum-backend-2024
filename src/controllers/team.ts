import { Event } from '../models/Event.js';
import { Department } from '../models/Department.js';
import {StatusCodes} from 'http-status-codes'
import {BadRequestError,CustomAPIError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import { Participants } from '../models/Participant.js';
import { Team } from '../models/Team.js';
import { sendOtpEmail } from '../helper/email-otp/zeptomail.js';
import cloudinary from "cloudinary";
import { eventNames } from 'process';
import { participantRegisteredTemplate, teamRegistrationAdminUpdateTemplate } from '../helper/email-template.js';

interface participantInfo{
    email:string
    name:string
    contact:string
    college:string
    idcard:string
}
export const createTeam = async(req:Request,res:Response)=>{
    const {teamName,eventId,leader,participants,payment_screenshot} = req.body
    if(!teamName || !eventId || !leader || !participants || !payment_screenshot)
        throw new BadRequestError("'teamName' 'eventId' 'leader' 'participants' 'payment_screenshot' cannot be empty")

    const event = await Event.findOne({_id:eventId})
    if(!event)
        throw new NotFoundError(`No event with id ${eventId}`)

    const limit = event.participationLimit
    if(limit != -1){
        const entries = await Team.find({eventId:eventId})
        if(entries.length >= limit)
            throw new CustomAPIError("Participation limit reached",StatusCodes.FORBIDDEN);
    }

    if(event.teamSize.max < participants.length && participants.length < event.teamSize.min)
        throw new BadRequestError(`Invalid number of participants, Max:${event.teamSize.max}, Min:${event.teamSize.min}`);

    const emails:string[] = participants.map((participant:participantInfo) => participant.email);
    if(!emails.includes(leader))
        throw new BadRequestError("Leader should be part of team")

    const temp:string[] = []
    emails.forEach((ele)=>{
        if(temp.includes(ele))
            throw new BadRequestError("Duplicate email")
        temp.push(ele)
    })

    if(!(payment_screenshot.startsWith('data:')))
        throw new BadRequestError('payment_screenshot must be base64 encoded')

    const result = await cloudinary.v2.uploader.upload(payment_screenshot, { resource_type: "image" });

    const team = await Team.create({teamName,eventId,leader,participants:emails,payment_screenshot:result.secure_url})

    participants.forEach(async(ele:participantInfo)=>{
        if(!ele.email || !ele.name || !ele.contact ||!ele.idcard)
            throw new BadRequestError("'email' 'name' 'contact' 'idcard' 'college' cannot be empty inside participants")
        if(!(ele.idcard.startsWith('data:')))
            throw new BadRequestError('idcard must be base64 encoded')

        const temp = await Participants.find({email:ele.email})
        if(temp.length == 0){
            const result = await cloudinary.v2.uploader.upload(ele.idcard, { resource_type: "image" });
            await Participants.create({email:ele.email,name:ele.name,idcard:result.secure_url,contact:ele.contact,college:ele.college})
        }
        
        await Participants.findOneAndUpdate({email:ele.email},{ $push: { events: eventId, teams: team } })
    })
    const data = participantRegisteredTemplate(event.eventName,teamName)
    const adminData = teamRegistrationAdminUpdateTemplate(event.eventName,teamName)
    sendOtpEmail(leader, '', teamName, data.htmlBody, data.subjectBody, true);
    sendOtpEmail("gecstudentscouncil@gmail.com", '', "Spectrum 2024 Admin", adminData.htmlBody, adminData.subjectBody, true);
    
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

export const getTeamsWhole = async(req:Request,res:Response)=>{
    const {eventId} = req.params
    const department = req.user?.department
    const isAdmin = req.user?.isAdmin

    const event = await Event.findById(eventId)
    if(!event)
        throw new NotFoundError(`No event with id ${eventId}`)

    if(department != event.departmentId && !isAdmin)
        throw new UnauthenticatedError("You do not belong to the department of this event")
    
    const teams = await Team.find({eventId:eventId})

    //couple all the participant objs with the team obj and return the data if detailed is true else only return team objs
        const participantPromises = teams.map(async (team: any) => {
            const participantEmails = team.participants;
            const participantPromises = participantEmails.map(async (email: any) => {
                return await Participants.find({ email: email });
            });
            const participants = await Promise.all(participantPromises);
            //return an array of teams with participants, [team:praticipant[],team:praticipant[]]
            return { team: team, participants: participants }; //returns 
        });
        const teamsWithParticipants = await Promise.all(participantPromises);
        res.status(StatusCodes.OK).json(teamsWithParticipants)
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

    const participantEmails = team[0].participants;
    const participantPromises = participantEmails.map(async (email: any) => {
        return await Participants.find({ email: email });
    });
    const participants = await Promise.all(participantPromises);
    res.status(StatusCodes.OK).json({"team":team[0],"participants":participants})
}

export const getParticipant = async(req:Request,res:Response)=>{
    const {email} = req.body
    if(!email)
        throw new BadRequestError("'email' should be given as query params")

    const participant = await Participants.findOne({email:email})
    if(!participant)
        throw new NotFoundError(`No participant with email ${email}`)
    
    // add all the teams the pariticipant belongs to in the participant object before sending it
    const teamPromises = participant.teams.map(async (teamId: any) => {
        return await Team.find({ _id: teamId });
    })
    res.status(StatusCodes.OK).json(participant)
}

export const initializeTeam = async(req:Request,res:Response)=>{
    const {teamName,eventId,leader,leaderName,leaderContact,leaderCollege} = req.body

    if(!teamName || !eventId || !leader || !leaderName || !leaderContact || !leaderCollege)
        throw new BadRequestError("'teamName' 'eventId' 'leader' 'leaderName' 'leaderContact' 'leaderCollege' cannot be empty")

    const event = await Event.findOne({_id:eventId})
    if(!event)
        throw new NotFoundError(`No event with id ${eventId}`)

    const limit = event.participationLimit
    if(limit != -1){
        const entries = await Team.find({eventId:eventId})
        if(entries.length >= limit)
            throw new CustomAPIError("Participation limit reached",StatusCodes.FORBIDDEN);
    }

    const files= req.files as  {[fieldname: string]: Express.Multer.File[]};
    const payment_screenshot=files['payment'][0];
    const idcard = files['idcard'][0];

    // const files = req.files as Express.Multer.File[];
    console.log(payment_screenshot,idcard)

    // Check if payment and idcard files are uploaded
    
    if (!payment_screenshot || !idcard)
        throw new BadRequestError("Both 'payment' and 'idcard' files are required");

    let dataUrl = `data:image/jpeg;base64,${payment_screenshot.buffer.toString('base64')}`;
    const paymentResult = await cloudinary.v2.uploader.upload(dataUrl, { resource_type: "image" });

    dataUrl = `data:image/jpeg;base64,${idcard.buffer.toString('base64')}`;
    const idCardResult = await cloudinary.v2.uploader.upload(dataUrl, { resource_type: "image" });


    // Create team with uploaded file URLs
    const team = await Team.create({
        teamName,
        eventId,
        leader,
        payment_screenshot: paymentResult.secure_url
    });

    const temp = await Participants.find({email:leader})
    if(temp.length == 0){
        await Participants.create({email:leader,name:leaderName,idcard:idCardResult.secure_url,contact:leaderContact,college:leaderCollege})
    }
    await Participants.findOneAndUpdate({email:leader},{ $push: { events: team.eventId, teams: team._id } })
    await Team.findOneAndUpdate({ _id: team._id }, { $push: { participants: leader } })

    // Send OTP to leader
    const data = participantRegisteredTemplate(event.eventName,teamName)
    const adminData = teamRegistrationAdminUpdateTemplate(event.eventName,teamName)
    sendOtpEmail(leader, '', teamName, data.htmlBody, data.subjectBody, true);
    sendOtpEmail("gecstudentscouncil@gmail.com", '', "Spectrum 2024 Admin", adminData.htmlBody, adminData.subjectBody, true);
    
    res.status(StatusCodes.OK).json({msg:"Team Added",teamId:team._id})
}

export const addParticipant = async(req:Request,res:Response)=>{
    const {teamId} = req.params
    const team = await Team.findById(teamId)
    if(!team)
        throw new NotFoundError(`No team with id ${teamId}`)

    const {email,name,contact,college} = req.body
    if(!email || !name || !contact || !college)
        throw new BadRequestError("'email' 'name' 'contact' 'college' cannot be empty inside participants")

    const file = req.file as Express.Multer.File
    if(!file)
        throw new BadRequestError("'file' (idcard) cannot be empty")

    const temp = await Participants.find({email})
    if(temp.length == 0){
        const dataUrl = `data:image/jpeg;base64,${file.buffer.toString('base64')}`;
        const result = await cloudinary.v2.uploader.upload(dataUrl, { resource_type: "image" });
        await Participants.create({email,name,idcard:result.secure_url,contact,college})
    }
    await Participants.findOneAndUpdate({email},{ $push: { events: team.eventId, teams: teamId } })
    await Team.findOneAndUpdate({ _id: teamId }, { $push: { participants: email } })

    res.status(StatusCodes.OK).json({ msg: "Participant added to team" })
}

