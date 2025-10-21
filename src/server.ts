import express from 'express'
import router from './router'

const app = express()

app.use(express.json()) //Read json data

app.use('/', router)

export default app