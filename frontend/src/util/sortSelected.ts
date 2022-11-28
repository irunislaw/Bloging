import { Blog } from "../interfaces/Blog";
import { sortByDate } from "./sortByDate";
import { sortByViews } from "../index";
import { sortByTitle } from "./sortByTitle";

export let sortSelected = (blogArray: Blog[]) => {
    let element = document.querySelector("#selectSort") as HTMLInputElement;
    let option = element?.value;
    switch (option) {
        case "views":
            return sortByViews(blogArray);
        case "date":
            return sortByDate(blogArray);
        case "title":
            return sortByTitle(blogArray);
        default:
            return sortByDate(blogArray);
    }
};
