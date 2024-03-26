import { Hono } from "../deps.ts";

import courseController from "../controllers/courseController.ts";

const courses = new Hono();

courses.get("/", courseController.handleFindAll);


export { courses }
