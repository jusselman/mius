import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        picturePath: String,
        audio: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Audio",
            required: true,
        },
        description: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            types: Array, 
            default: [],
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;