import { Blog } from "../interfaces/Blog";


export let sortByPopularity = (blogArray: Blog[]) => {
    return blogArray.sort((a, b) => {
        return a.views / a.likes < b.views / b.likes
            ? -1
            : a.views / a.likes > b.views / b.likes
                ? 1
                : 0;
    });
};
