// deno-lint-ignore-file no-explicit-any
import { Hono, logger, poweredBy, prettyJSON, cors } from "./deps.ts";
import { courses } from "./routes/courseRoutes.ts";

const app = new Hono();

app.use("*", logger(), poweredBy(), prettyJSON());

app.use("/*", cors());

app.route("/courses", courses);

app.notFound((c: any) => c.json({ message: "Not Found" }, 404));

Deno.serve(app.fetch);
