import environ from './environ'
import { postgres } from './deps'

const sql = postgres({
  host: environ.PGHOST,
  username: environ.PGUSER,
  password: environ.PGPASSWORD,
  database: environ.PGDATABASE,
  port: environ.PGPORT,
  max: 2,
})

export { sql }
