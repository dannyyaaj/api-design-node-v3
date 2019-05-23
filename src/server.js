import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  // callback function referred to as a controller
  res.send({ message: 'hello world, this is a get request' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok, this is a post request' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
// use npm run dev to run server
