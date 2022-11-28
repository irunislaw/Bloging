import { BlogComponent } from "./components/Blog";
import axios from "axios";
import { Blog } from "./interfaces/Blog";
import { sanitize } from "./util/sanitize";

const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;
const errorDiv = document.querySelector("#error") as HTMLDivElement;

(async () => {
  try {
    await fetch(
      "https://bloggingbackend.onrender.com/api/v1/blogs/get-blogs",
      {}
    )
      .then((response) => response.json())
      .then((data) => {
        for (const blog of data) {
          blogsDiv.innerHTML += sanitize(
            BlogComponent(
              blog.title,
              blog.shortContent,
              blog.authorName,
              blog.authorImage,
              blog.tags,
              blog.updatedAt
            )
          );
        }
      });
  } catch (error) {
    blogsDiv.style.display = "none"
    errorDiv.style.display = "flex";
    errorDiv.innerHTML += sanitize(
      String.raw`<div class="flex flex-col justify-center items-center min-h-[calc(100vh-11.5rem)] gap-5">
            <div class="text-9xl">🤔</div>
            <div class="text-3xl text-white w-10/12 md:w-1/2 text-center ">Hmm, coś poszło nie tak podczas ładownia blogów, spróbuj ponownie później</div>
        </div>`
    );
   
  }
})();
