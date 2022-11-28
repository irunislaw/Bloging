import { Router } from "express";
import { Blog } from "../../schemas/Blog";

export const router = Router();

router.get("/get-blogs", async (req, res) => {
    // let page = 0;
    // if (!isNaN(parseInt(req.query?.page?.toString()))) page = Math.max(0, parseInt(req.query.page.toString()) - 1);
    /*
    Generalnie to normalnie bym zaimplementowal tutaj pagination jak wyzej
    ale gdybym uzyl paginacji to musialbym tez sortowac na backendzie.
    I ze względu na to, że chce zeby reszta miala robote to zwracam wszystkie blogi z bazy danych (mega inneficient)
    */
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post("/add-view", async(req, res) => {
    if (!req.body?.id) return res.sendStatus(400);
    try {
        await Blog.findByIdAndUpdate(req.body.id, { $inc: { views: 1 } });
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
});