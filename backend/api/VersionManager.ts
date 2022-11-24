import { Router } from "express";
import * as fs from "fs";
import { getRoutes } from "../util/getRoutes";

export const router = Router();

const versionDirectories = fs.readdirSync("./api", { withFileTypes: true }).filter(f => f.isDirectory());

for (const versionDirectory of versionDirectories) {
    const routesOfVersion = fs.readdirSync(`./api/${versionDirectory.name}`, { withFileTypes: true }).filter(f => f.isFile());
    for (const route of routesOfVersion) {
        const routeContents = require(`./${versionDirectory.name}/${route.name}`);
        router.use(`/${versionDirectory.name}/${route.name.split(".")[0]}`, routeContents.router);
        for (const stack of routeContents.router.stack) {
            const routeProps = getRoutes(stack);
            process.env.NODE_ENV === "development" ? console.log(`${Object.keys(routeProps.methods).join("|").toUpperCase()} ${process.env.API_ROOT}/${versionDirectory.name}/${route.name.split(".")[0]}${routeProps.path}`) : ""
        }

    }
}