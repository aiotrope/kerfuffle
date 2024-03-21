import environ from './environ'
import { http } from './deps'
import app from './app'
import { logger } from './util/loggerUtil'

const server = http.createServer(app)

const port = environ.PORT

server.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
})
