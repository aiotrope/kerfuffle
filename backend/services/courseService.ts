import { sql } from '../database.ts';

const getCourses = async () => {
  const courses = await sql`SELECT * FROM courses;`;
  return courses;
};

const courseService = {
  getCourses,
};

export default courseService;