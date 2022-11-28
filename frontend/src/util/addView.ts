import { globalBlogArray } from "..";
import { renderBlogs } from "./renderBlogs";

export const addView = async (id: string) => {
    try {
        console.log(id);

        globalBlogArray[globalBlogArray.findIndex((b) => b._id == id)].views++;
        renderBlogs(globalBlogArray);

        console.log(
            await fetch(
                "/api/v1/blogs/add-view",
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
