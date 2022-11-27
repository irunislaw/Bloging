import mongoose, { Model, model, Schema } from "mongoose";

interface Blog {
    _id: mongoose.ObjectId,
    title: string,
    tags: string[],
    views: number,
    likes: number,
    shortContent: string,
    authorName: string,
    authorImage: string,
    createdAt: Date,
    updatedAt: Date
}

const BlogSchema = new Schema<Blog, Model<Blog>>({
    title: String,
    tags: [],
    views: Number,
    likes: Number,
    shortContent: String,
    authorName: String,
    authorImage: String
}, {timestamps: true});

export const Blog = model("blog", BlogSchema, "blogs");
