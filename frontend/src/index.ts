import { BlogComponent } from "./components/Blog";
import { Blog } from "./interfaces/Blog";
import { sanitize } from "./util/sanitize";

let arr: Blog[];
const loader = document.querySelector("#preload") as HTMLDivElement;
const emoji = loader?.querySelector("#emoji") as HTMLDivElement;

const emojis = [
  "🕐",
  "🕑",
  "🕒",
  "🕓",
  "🕔",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕛",
];

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
let sortSelected = (blogArray: Blog[]) => {
  let element = document.querySelector("#selectSort") as HTMLInputElement;
  let option = element?.value;
  switch (option) {
    case "views":
      return sortByViews(blogArray);
    case "date":
      return sortByDate(blogArray);
    case "title":
      return sortByTitle(blogArray);
    case "popularity":
      return sortByPopularity(blogArray);
    default:
      return sortByDate(blogArray);

  }
};
let renderBlogs = (blogs: Blog[]) => {
  blogsDiv.innerHTML = "";
  console.log(blogs);
  let sortedBlogs = sortSelected(blogs)
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
let search = () => {
  let input = document.querySelector("#search") as HTMLInputElement;
  let value = input.value;
  console.log(value);
  console.log("siema");

  console.log(arr);
  renderBlogs(
    arr.filter((obj) => {
      return obj.title.match(new RegExp(value, "gi"));
    })
  );
};
document.querySelector("#search")?.addEventListener("input", search);
(async () => {
  try {
    const data = (await (
      await fetch(
        "https://bloggingbackend.onrender.com/api/v1/blogs/get-blogs",
        {}
      )
    ).json()) as Blog[];

    console.log(data);
    arr = data;
    
    renderBlogs(arr);
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
  document.getElementById(id)?.classList.add("hidden");
};
//@ts-ignore
window.hideBlog = hideBlog;

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
let sortByViews = (blogArray: Blog[]) => {
  return blogArray.sort((a, b) => {
    return b.views - a.views;
  });
};
let sortByTitle = (blogArray: Blog[]) => {
  return blogArray.sort((a, b) => {
    return a.title.toUpperCase() < b.title.toUpperCase()
      ? -1
      : a.title.toUpperCase() > b.title.toUpperCase()
      ? 1
      : 0;
  });
};
let sortByPopularity = (blogArray: Blog[]) => {
  return blogArray.sort((a, b) => {
    return a.views/a.likes < b.views/b.likes
      ? -1
      : a.views/a.likes > b.views/b.likes
      ? 1
      : 0;
  })
}
document
  .querySelector("#selectSort")
  ?.addEventListener("input", () => renderBlogs(arr));
