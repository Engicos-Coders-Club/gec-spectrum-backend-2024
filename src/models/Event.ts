import { Schema, Document, model } from 'mongoose';

// Subschema for coordinator information
const CoordinatorSchema = new Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true,
        match: [
        /^\d{10}$/,
        'Please provide a valid 10-digit contact number'
    ]}
});

// Subschema for rules and regulations
const RuleSchema = new Schema({
    topic: { type: String, required: true },
    points: { type: [String], required: true }
});

// Main Event schema
const EventSchema = new Schema({
    eventName: { type: String, required: true },
    imageURL:{type:String,default:""},
    introduction:{type:String,required:true},
    departmentId:{type:String,required:true},
    prices: {
        firstPlace: { type: Number, required: true },
        secondPlace: { type: Number, required: true }
    },
    date: { type: Date, required: true },
    teamSize: { type: Number, required: true },
    contact: {
        coordinators: { type: [CoordinatorSchema], required: true }
    },
    rulesAndRegulations: { type: [RuleSchema], required: true }
});

// Define the interface for Event document
interface IEvent extends Document {
    eventName: string;
    imageURL:string;
    introduction:string;
    departmentId:string;
    prices: {
        firstPlace: number;
        secondPlace: number;
    };
    date: Date;
    teamSize: number;
    contact: {
        coordinators: {
            name: string;
            contact: string;
        }[];
    };
    rulesAndRegulations: {
        topic: string;
        points: string[];
    }[];
}

// Create and export the Event model
export const Event= model<IEvent>('Event', EventSchema);
