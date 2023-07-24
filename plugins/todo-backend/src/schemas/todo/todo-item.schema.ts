import {Schema} from "mongoose";

export const TodoItemSchema = new Schema({
    name: {type: String},
    description: {type: String},
}, {
    timestamps: true,
});

TodoItemSchema.set('toJSON', {
    virtuals: true
});

TodoItemSchema.index({
    hash: 1
}, {unique: true});
