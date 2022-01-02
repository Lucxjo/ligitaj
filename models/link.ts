import mongoose from 'mongoose';
import shortId from '../lib/shortId';

const linkSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId(),
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.model('links', linkSchema);