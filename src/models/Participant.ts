import mongoose from 'mongoose';

interface IParticipants extends mongoose.Document {
    name:string;
    email: string;
    contact: string;
    department: mongoose.Schema.Types.ObjectId;
    events: mongoose.Schema.Types.ObjectId[];
    verified: boolean;
    otp: string;
    idcard:string;
    checkOtp(key: number): boolean;
}

const participantSchema = new mongoose.Schema<IParticipants>({
    name:{
        type:String,
        required:[true,'please provide email']
    },
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
        default:"",
        unique:false
    },
    verified:{type: Boolean, default : false},
    events:[{  
        type:mongoose.Schema.Types.ObjectId,
        default:[]
    }],
    otp:{type: String},
    idcard:{type:String,default:""}
})

// mongoose schema instance methods
participantSchema.methods.checkOtp = function(otp:number){
    if(this.otp === otp){
            return true;
    }else
        return false
}
export const Participants = mongoose.model('Participants',participantSchema);