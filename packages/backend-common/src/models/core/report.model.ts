// Lazy Begin Imports
import {Document} from "mongoose";
// Lazy End Imports

// Lazy Begin
export interface IReport extends Document {
    date: string;
    time: Date;
    endDate: string;
    duration: string;
    status: string;
    branch: string;
    version: string;
}

// Lazy End
