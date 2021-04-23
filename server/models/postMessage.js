import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;