import {ConnectOptions, createConnection, Model} from "mongoose";

// Lazy Begin Imports
import {ReportSchema} from "../schemas";
import {IReport} from "../models";
// Lazy End Imports

const uri: string = process.env.MONGO_URI_CORE || "mongodb://localhost:27017/template-dev";
const options: ConnectOptions = {};
export const CoreConn = createConnection(uri, options);

// Lazy Begin
export const Report: Model<IReport> = CoreConn.model<IReport>('Report', ReportSchema);
// Lazy End
