// app.js
const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

const logger = function logger(req, res, next){
  const Time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  const method = req.method
  const URL = req.originalUrl
  console.log(`${Time}|${method} from ${URL}`)
 
  next()
}

app.use(logger)

app.get('/', (req, res) => {
  // console.log(new Date())
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`)
})