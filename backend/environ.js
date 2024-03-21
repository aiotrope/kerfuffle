import { path, dotenv, cleanEnv, str } from './deps'

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.NODE_ENV}`),
})

const environ = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'test', 'production', 'staging'],
  }),
  PORT: port(),
  REDIS_URL: str(),
})

export default environ
