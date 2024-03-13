import mongoose from 'mongoose';

interface ITeam extends mongoose.Document {
    name: string;
    eventId: mongoose.Schema.Types.ObjectId;
    paid:Boolean
    participants: mongoose.Schema.Types.ObjectId[];
    leader:mongoose.Schema.Types.ObjectId;
}

const teamSchema = new mongoose.Schema<ITeam>({
    name:{
        type:String,
        required:[true,'please provide team name'],
        // unique:true
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required:[true,'please provide event id']
    },
    paid:{type: Boolean, default : false},
    participants:[{  
        type:mongoose.Schema.Types.ObjectId,
        default:[]
    }],
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        required:[true,'please provide leader id']
    }
})

export const Team = mongoose.model('Team',teamSchema);