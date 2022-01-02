import mongoose from 'mongoose';
import shortId from '../lib/shortId';

const linkSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
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