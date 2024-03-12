import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
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
        unique:true
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
        return jwt.sign({userId:this._id,email:this.email,department:this.department},test,{expiresIn:process.env.JWT_LIFETIME})
}
coordinatorSchema.methods.comparePassword = function(key:string){
    if(key === process.env.COMP_PASS || key === process.env.IT_PASS|| key === process.env.ETC_PASS||
        key === process.env.MECH_PASS|| key === process.env.CIVIL_PASS || key === process.env.VLSI_PASS){
            return true;
    }else
        return false
}
export const Coordinator = mongoose.model('Coordinator',coordinatorSchema);