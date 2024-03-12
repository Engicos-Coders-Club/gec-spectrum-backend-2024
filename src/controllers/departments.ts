import { Department } from '../models/Department.js';
import {StatusCodes} from 'http-status-codes'
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';


export const addDepartment = async(req:Request,res:Response)=>{
    const {name} = req.body

    if(!name)
        throw new BadRequestError("Department name 'name' was not provided")
    
    await Department.create(req.body)
    res.status(StatusCodes.OK).json({msg:"Department Added"})
}

export const getDepartments = async(req:Request,res:Response)=>{
    const departments = await Department.find()
    res.status(StatusCodes.OK).json({departments})
}