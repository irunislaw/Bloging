import { config } from "dotenv";
config({ path: "../.env" });
import * as express from "express";
import mongoose from "mongoose";
import { router, routes } from "./api/VersionManager";
import * as cors from "cors";
const app = express();

(async () => {
    app.use(express.json());
    app.use(cors());
    app.use(process.env.API_ROOT, router);

    await mongoose.connect(process.env.MONGO_URI + "/" + process.env.MONGO_DB);

    app.get("/", (req, res) => {
        res.send(routes);
    });

    app.listen(process.env.PORT, () => {
        console.log(`Listening on ${process.env.PORT}`);

    });
})();


