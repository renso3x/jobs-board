import * as express from 'express'
import { json } from 'body-parser'
import setupRouter from './router'

const app = express()

app.use(json())

app.use(setupRouter)

app.listen(8080, () => {
  console.log('Server is listening to port 8080')
})