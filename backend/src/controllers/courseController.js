import courseService from '../services/courseService'
import { cacheMethodCalls } from '../util/cacheUtil'

const cachedCourseService = cacheMethodCalls(courseService, [])

const handleFindAll = async (req, res) => {
  const courses = await cachedCourseService.getCourses()
  return res.status(200).json(courses)
}

const courseController = {
  handleFindAll,
}

export default courseController
