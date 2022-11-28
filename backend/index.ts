import { config } from "dotenv";
config({ path: "../.env" });
import * as express from "express";
import mongoose from "mongoose";
import { router, routes } from "./api/VersionManager";
import * as cors from "cors";
import * as path from "path";
const app = express();

(async () => {
    app.use(express.json());
    app.use(cors());
    app.use(process.env.API_ROOT, router);

    await mongoose.connect(process.env.MONGO_URI + "/" + process.env.MONGO_DB);

    app.use("/", express.static(path.join("..", "static") ));

    app.use("/", express.static(path.join("..", "..", "frontend", "dist") ));


    app.get("/", (req, res) => {
        res.send(routes);
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join("..", "..", "frontend", "dist", "index.html"));
    });

    app.listen(process.env.PORT, () => {
        console.log(`Listening on ${process.env.PORT}`);

    });
})();


