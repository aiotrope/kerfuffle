import express from 'express'
import http from 'http'
import path from 'path'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import createHttpError from 'http-errors'
import cors from 'cors'
import nocache from 'nocache'
import postgres from 'postgres'
import bcrypt from 'bcryptjs'
import { expressjwt } from 'express-jwt'
import { sanitize } from 'isomorphic-dompurify'
import Redis from 'ioredis'
import { cleanEnv, port, str, num } from 'envalid'

export {
  express,
  http,
  postgres,
  cookieParser,
  cors,
  nocache,
  createHttpError,
  bcrypt,
  expressjwt,
  sanitize,
  Redis,
  path,
  dotenv,
  cleanEnv,
  port,
  str,
  num,
}
