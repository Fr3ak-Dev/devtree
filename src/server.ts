import express from 'express'
import router from '../src/router'
import {connectDB} from './config/db'
import 'dotenv/config'

const app = express()

connectDB()

app.use(express.json()) //Read json data

app.use('/', router)

export default app