import { createHttpError } from '../deps'

const endPoint404 = (req, res, next) => {
  next(createHttpError(404))
}

export { endPoint404 }
