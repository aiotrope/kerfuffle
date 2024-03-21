import { path, dotenv, cleanEnv, str, port } from './deps'

dotenv.config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`),
})

const environ = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'test', 'production', 'staging'],
  }),
  PORT: port(),
  REDIS_URL: str(),
  PGHOST: str(),
  PGUSER: str(),
  PGPASSWORD: str(),
  PGDATABASE: str(),
  PGPORT: port(),
  BACKEND_URL: str(),
  FRONTEND_URL: str(),
})

export default environ
