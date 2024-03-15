import mongoose from 'mongoose';

interface ITeam extends mongoose.Document {
    teamName: string;
    eventId: mongoose.Schema.Types.ObjectId;
    paid:Boolean,
    payment_screenshot:String
    participants: {email:string,name:string,contact:string}[];
    leader:String;
}

const teamSchema = new mongoose.Schema<ITeam>({
    teamName:{
        type:String,
        required:[true,'please provide team name'],
        // unique:true
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required:[true,'please provide event id']
    },
    paid:{type: Boolean, default : false},
    payment_screenshot:{type:String,default:""},
    participants:[
        {type:String,required:[true,'please provide email'],
                match:[
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ,'Please provide valid email'
                ],
        }, 
    ],
    leader: {
        type:String,
        required:[true,'please provide email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ,'Please provide valid email'
        ],
    },

})

export const Team = mongoose.model('Team',teamSchema);