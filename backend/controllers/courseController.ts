// deno-lint-ignore-file
import courseService from "../services/courseService.ts";

import { cacheMethodCalls } from "../util/cacheUtil.ts";

const cachedCourseService = cacheMethodCalls(courseService, []);

const handleFindAll = async (c: any) => {
  const courses = await cachedCourseService.getCourses();
  return c.json({ courses }, 200)
  
};

const courseController = {
  handleFindAll,
};

export default courseController;
