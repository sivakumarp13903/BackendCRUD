import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: { 
        type: String,
        required: true
    },
    publishedYear: {
        type: Number, 
        required: true
    },
    price: { 
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true 
    }
});

export default mongoose.model('Books', bookSchema);
