import { BlogComponent } from "./components/Blog";
import { Blog } from "./interfaces/Blog";
import { sanitize } from "./util/sanitize";

let arr: Blog[];
const loader = document.querySelector('#preload') as HTMLDivElement;
const emoji = loader?.querySelector('#emoji') as HTMLDivElement;

const emojis = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛"];

const interval = 70;

const loadEmojis = (arr: string[]) => {
  let index = 0;
  setInterval(() => {
    if (index > emojis.length - 1) index = 0;
    emoji.innerText = arr[index];
    index++;
  }, interval);
};
loadEmojis(emojis);

const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;
const errorDiv = document.querySelector("#error") as HTMLDivElement;
const compose =
  (...fns: any[]) =>
  (x: any[]) =>
    fns.reduce((acc, fn) => fn(acc), x);
const sortByDate = (list: Blog[]) =>
  list.sort((a, b) => {
    let date1 = new Date(a.createdAt);
    let date2 = new Date(b.createdAt);
    return date1.getTime() - date2.getTime();
});
const composeSortByDate = compose(sortByDate);

let renderBlogs = (blogs: Blog[]) => {
    blogsDiv.innerHTML = "";
    console.log(blogs);

    for (const blog of blogs) {
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
}
let search = () => {
    let input = document.querySelector("#search") as HTMLInputElement;
    let value = input.value;
    console.log(value);
    console.log("siema");

    console.log(arr);
    renderBlogs(arr.filter(obj => {
        return obj.title.match(new RegExp(value, "gi"));
    }));

}
document.querySelector("#search")?.addEventListener("change", search);

  for (const blog of blogSorted) {
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
let search = () => {
  let input = document.querySelector("#search") as HTMLInputElement;
  let value = input.value;
  
  renderBlogs(
    arr.filter((obj) => {
      return obj.title.includes(value) || obj.tags.includes(value);
    })
  );
};
document.querySelector("#search")?.addEventListener("change", search);

(async () => {
    try {

        const data = await ((await fetch(
            "https://bloggingbackend.onrender.com/api/v1/blogs/get-blogs",
            {}
        )).json()) as Blog[];

        console.log(data);
        arr = data
        let blogSorted = composeSortByDate(data) as Blog[];
        renderBlogs(blogSorted);
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
const hideBlog = (id: string)=>{
    document.getElementById(id)?.classList.add("hidden")
}
//@ts-ignore
window.hideBlog =hideBlog

const addView = async (id: string) => {
  try {
    console.log(id);

    console.log(
      await fetch(
        "https://bloggingbackend.onrender.com/api/v1/blogs/add-view",
        {
          method: "POST",
          body: JSON.stringify({ id }),
          headers: {
            "content-type": "application/json",
          },
        }
      )
    );
  } catch (error) {
    console.error(error);
  }
};
//@ts-ignore since we have type module it creates it's own scope and doenst expose functions to window so we have to expose it ourselfes
window.addView = addView;
