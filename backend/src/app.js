import environ from './environ'
import { express, cookieParser, cors, nocache, morgan } from './deps'
require('express-async-errors')
import { loggerUtil } from './util/loggerUtil'
import { endPoint404 } from './middleware/error'

import courseRouter from './routes/courseRoutes'

const app = express()

app.use(cookieParser())

app.use(
  cors({
    origin: [environ.BACKEND_URL, environ.FRONTEND_URL],
    credentials: true,
    optionsSuccessStatus: 200,
  })
)

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.disable('x-powered-by')

if (environ.isDev) app.use(loggerUtil)

app.use(nocache())

app.use('/', courseRouter)

app.use(endPoint404)

export default app
