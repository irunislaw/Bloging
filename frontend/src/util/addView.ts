export const addView = async (id: string) => {
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
