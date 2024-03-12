import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide department name"],
    }
}) 

export const Department = mongoose.model('Department',DepartmentSchema);