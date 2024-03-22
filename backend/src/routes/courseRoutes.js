import { express } from '../deps'

import courseController from '../controllers/courseController'

const router = express.Router()

router.get('/courses', courseController.handleFindAll)

export default router
