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
    if(newBlogs(blogs).length == 1) blogsDiv.classList.remove("xl:grid-cols-2");
    else blogsDiv.classList.add("xl:grid-cols-2");
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
