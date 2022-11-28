import { Blog } from "./interfaces/Blog";
import { renderBlogs } from "./util/renderBlogs";
import { loadEmojis, emojis } from "./util/loadEmojis";
import { addView } from "./util/addView";




export let globalBlogArray: Blog[];


document
    .querySelector("#selectSort")
    ?.addEventListener("input", () => renderBlogs(globalBlogArray));

const loader = document.querySelector("#preload") as HTMLDivElement;
export const emoji = loader?.querySelector("#emoji") as HTMLDivElement;
export const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;
const errorDiv = document.querySelector("#error") as HTMLDivElement;

loadEmojis(emojis);


document.querySelector("#search")?.addEventListener("input", () => renderBlogs(globalBlogArray));


(async () => {
    try {

        const data = (await (
            await fetch(
                "/api/v1/blogs/get-blogs",
                {}
            )
        ).json()) as Blog[];

        console.log(data);
        globalBlogArray = data;

        renderBlogs(globalBlogArray);
        loader.classList.remove("flex");
        loader.classList.add("hidden");
        blogsDiv.classList.add("grid");
        blogsDiv.classList.remove("hidden");
    } catch (error) {
        blogsDiv.classList.add("hidden");
        errorDiv.classList.remove("hidden");
        errorDiv.classList.add("flex");
    }
})();

const hideBlog = (id: string) => {
    document.getElementById(id)?.remove();
    globalBlogArray = globalBlogArray.filter((b) => b._id != id);
    renderBlogs(globalBlogArray);
};
//@ts-ignore
window.hideBlog = hideBlog;

//@ts-ignore since we have type module it creates it's own scope and doenst expose functions to window so we have to expose it ourselfes
window.addView = addView;
export let sortByViews = (blogArray: Blog[]) => {
    return blogArray.sort((a, b) => {
        return b.views - a.views;
    });
};

