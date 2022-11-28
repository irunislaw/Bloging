import { Blog } from "../interfaces/Blog";

export let sortByTitle = (blogArray: Blog[]) => {
    return blogArray.sort((a, b) => {
        return a.title.toUpperCase() < b.title.toUpperCase()
            ? -1
            : a.title.toUpperCase() > b.title.toUpperCase()
                ? 1
                : 0;
    });
};
