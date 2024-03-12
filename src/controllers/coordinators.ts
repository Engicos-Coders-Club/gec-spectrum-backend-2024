import { Department } from '../models/Department.js';
import { Coordinator } from '../models/Coordinator.js';
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

export const getDepartmentName = async(req:Request,res:Response)=>{
    const userId =  req.user?.userId
    const department = req.user?.department
    
    if(!userId){ // implies admin is accessing route
        throw new BadRequestError("Admin does not belong to a department")
    }
    const dept = await Department.findOne({ _id: department });
    res.status(StatusCodes.OK).json({ dept });
}