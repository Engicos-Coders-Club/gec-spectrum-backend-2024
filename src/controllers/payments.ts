
import { Team } from '../models/Team.js';
import {StatusCodes} from 'http-status-codes'
import { verifyPaymentSignature } from '../payments/index.js';
import {BadRequestError,NotFoundError,UnauthenticatedError} from '../errors/index.js'
import { Request, Response} from 'express';
import { config } from 'dotenv';
config();

export const verifyPayment = async(req:Request,res:Response)=>{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, team_id } = req.body;
    const team = await Team.findOne({id:team_id});
    if(!team)
    throw new NotFoundError("Team didn't register")

    const paymentValidation = verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature, process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET');
    
    if (paymentValidation) {
        await Team.findOneAndUpdate({id:team_id},{paid:true});
        //sucess
    
    } else {
        throw new UnauthenticatedError("Invalid Signature")
        // Payment verification failed
    
    }
  };