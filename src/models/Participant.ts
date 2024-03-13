import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
config();

interface IParticipants extends mongoose.Document {
    email: string;
    contact: string;
    department: mongoose.Schema.Types.ObjectId;
    events: mongoose.Schema.Types.ObjectId[];
    verified: boolean;
    otp: string;
    checkOtp(key: number): boolean;
}

const participantSchema = new mongoose.Schema<IParticipants>({
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
    verified:{type: Boolean, default : false},
    events:[{  
        type:mongoose.Schema.Types.ObjectId,
        default:[]
    }],
    otp:{type: String},
})

// mongoose schema instance methods
participantSchema.methods.checkOtp = function(otp:number){
    if(this.otp === otp){
            return true;
    }else
        return false
}
export const Participants = mongoose.model('Participants',participantSchema);