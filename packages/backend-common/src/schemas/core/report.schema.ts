import {Schema} from "mongoose";

export const ReportSchema = new Schema({
    date: {type: String},
    time: {type: Date},
    endDate: {type: String},
    duration: {type: String},
    status: {type: String},
    branch: {type: String},
    version: {type: String},
}, {
    timestamps: true,
});