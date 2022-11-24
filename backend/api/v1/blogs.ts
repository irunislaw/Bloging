import { Router } from "express";
import { Blog } from "../../schemas/Blog";

export const router = Router();

router.get("/get-blogs", async (req, res) => {
    let page = 0;
    if (!isNaN(parseInt(req.query?.page?.toString()))) page = Math.max(0, parseInt(req.query.page.toString()) - 1);

    res.send(await Blog.find().skip(page * 10).limit(10));
});
