import { config } from "dotenv";
config({ path: "../.env" });
import * as express from "express";
import mongoose from "mongoose";
import { router } from "./api/VersionManager";
const app = express();

(async () => {
    app.use(process.env.API_ROOT, router);

    await mongoose.connect(process.env.MONGO_URI + "/" + process.env.MONGO_DB);


    app.listen(process.env.PORT, () => {
        console.log(`Listening on ${process.env.PORT}`);

    });
})();


