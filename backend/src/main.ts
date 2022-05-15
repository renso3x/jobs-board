import * as express from 'express'
import { json } from 'body-parser'
import * as cors from 'cors'
import setupRouter from './router'

const app = express()

app.use(cors('*'))
app.use(json())
app.use(setupRouter)

app.listen(8080, () => {
  console.log('Server is listening to port 8080')
})