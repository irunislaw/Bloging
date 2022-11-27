import { BlogComponent } from "./components/Blog";
import axios from "axios";
import { Blog } from "./interfaces/Blog";
import { sanitize } from "./util/sanitize";

const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;


(async () => {
    const blogs = (await axios.get<Blog[]>("https://bloggingbackend.onrender.com/api/v1/blogs/get-blogs", {})).data;

    for (const blog of blogs) {
        blogsDiv.innerHTML += sanitize(BlogComponent(blog.title, blog.shortContent, blog.authorName, blog.authorImage, blog.tags, new Date()));

    }
})();