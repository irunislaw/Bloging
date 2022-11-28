import { BlogComponent } from "../components/Blog";
import { Blog } from "../interfaces/Blog";
import { sanitize } from "./sanitize";
import { blogsDiv } from "../index";
import { sortSelected } from "./sortSelected";

export let renderBlogs = (blogs: Blog[]) => {
    blogsDiv.innerHTML = "";
    console.log(blogs);
    let sortedBlogs = sortSelected(blogs);
    for (const blog of sortedBlogs) {
        blogsDiv.innerHTML += sanitize(
            BlogComponent(
                blog._id,
                blog.title,
                blog.shortContent,
                blog.authorName,
                blog.authorImage,
                blog.tags,
                new Date(blog.createdAt),
                blog.likes,
                blog.views
            )
        );
    }
};
