import { BlogComponent } from "../components/Blog";
import { Blog } from "../interfaces/Blog";
import { sanitize } from "./sanitize";
import { blogsDiv } from "../index";
import { compose } from "./compose";
import { search } from "./search";
import { sortSelected } from "./sortSelected";

export let renderBlogs = (blogs: Blog[]) => {
    blogsDiv.innerHTML = "";
    console.log(blogs);

    const newBlogs = compose<Blog[]>(search, sortSelected);

    for (const blog of newBlogs(blogs)) {
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
