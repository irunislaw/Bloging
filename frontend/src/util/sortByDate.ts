import { Blog } from "../interfaces/Blog";

export const sortByDate = (list: Blog[]) => list.sort((a, b) => {
    let date1 = new Date(a.createdAt);
    let date2 = new Date(b.createdAt);
    return date2.getTime() - date1.getTime();
});
