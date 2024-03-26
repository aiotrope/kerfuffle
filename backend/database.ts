import { postgres } from './deps.ts';
// const env = await load();

const sql = postgres({});

export { sql };