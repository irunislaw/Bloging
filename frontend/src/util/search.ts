import { renderBlogs } from "./renderBlogs";
import { globalBlogArray } from "../index";

export let search = () => {
    let input = document.querySelector("#search") as HTMLInputElement;
    let value = input.value;
    console.log(value);
    console.log("siema");

    console.log(globalBlogArray);

    return globalBlogArray.filter((obj) => {
        return obj.title.match(new RegExp(value, "gi"));
    })

};
