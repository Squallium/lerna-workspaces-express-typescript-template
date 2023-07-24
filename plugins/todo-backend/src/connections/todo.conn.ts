import {ConnectOptions, createConnection, Model} from "mongoose";
// Lazy Begin Imports
import {TodoItemSchema} from "../schemas";
import {ITodoItem} from "../models";
// Lazy End Imports

const uri: string = process.env.MONGO_URI_TODO || "mongodb://localhost:27017/todo-dev";
const options: ConnectOptions = {};
export const TodoConn = createConnection(uri, options)

// Lazy Begin
export const Item: Model<ITodoItem> = TodoConn.model<ITodoItem>('Item', TodoItemSchema);
// Lazy End