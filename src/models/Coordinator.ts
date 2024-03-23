import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
import { departmentNameById } from '../helper/utils.js';
config();

interface ICoordinator extends mongoose.Document {
    email: string;
    contact: string;
    department: mongoose.Schema.Types.ObjectId;
    events: mongoose.Schema.Types.ObjectId[];
    createJWT(): string;
    comparePassword(key: string): boolean;
}

const coordinatorSchema = new mongoose.Schema<ICoordinator>({
    email:{
        type:String,
        required:[true,'please provide email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ,'Please provide valid email'
        ],
        unique:true, // to prevent duplication
    },
    contact: {
        type: String,
        match: [
            /^\d{10}$/,
            'Please provide a valid 10-digit contact number'
        ],
        unique:true // incase we need to search when email is not known
    },
    department:{
        type:mongoose.Schema.Types.ObjectId
    },
    events:[{  
        type:mongoose.Schema.Types.ObjectId,
        default:[]
    }]
})

// mongoose schema instance methods
coordinatorSchema.methods.createJWT = function(){
    const test = process.env.JWT_SECRET || null;
    if(test !== null)
        return jwt.sign({userId:this._id,email:this.email,department:this.department,isAdmin:false},test,{expiresIn:process.env.JWT_LIFETIME})
}
coordinatorSchema.methods.comparePassword = function(key:string){
    switch(departmentNameById[this.department]){
        case "Information Technology Engineering":
            if(key === process.env.IT_PASS)
                return true;
        case "Computer Engineering":
            if(key === process.env.COMP_PASS)
                return true;
        case "Electronics & Telecommunications Engineering":
            if(key === process.env.ETC_PASS)
                return true;
        case "Electrical & Electronics Engineering":
            if(key === process.env.ENE_PASS)
                return true;
        case "Mechanical Engineering":
            if(key === process.env.MECH_PASS)
                return true;
        case "Civil Engineering":
            if(key === process.env.CIVIL_PASS)
                return true;
        default:
            return false;
    }
}
export const Coordinator = mongoose.model('Coordinator',coordinatorSchema);