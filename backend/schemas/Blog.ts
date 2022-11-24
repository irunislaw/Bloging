import mongoose, { Model, model, Schema } from "mongoose"

interface Blog {
    _id: mongoose.ObjectId,
    title: string,
    tags: string[],
    views: number,
    likes: number,
    shortContent: string
}

const BlogSchema = new Schema<Blog, Model<Blog>>({
    title: String,
    tags: [],
    views: Number,
    likes: Number,
    shortContent: String
});

export const Blog = model("blog", BlogSchema, "blogs");
