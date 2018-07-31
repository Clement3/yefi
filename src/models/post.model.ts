import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostModel = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});