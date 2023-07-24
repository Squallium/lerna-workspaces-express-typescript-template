// Lazy Begin Imports
import {Document} from "mongoose";
// Lazy End Imports

// Lazy Begin
export interface ITodoItem extends Document {
    name: string;
    description: string;
}

// Lazy End