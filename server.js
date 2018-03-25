const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path') // returns path relative to server.js file

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))

require('./build/dev-server')(app)

app.set('port', process.env.PORT || 3000)
app.get('/', (req, res) => {
  res.write(indexHTML)
  res.end()
})

app.listen(app.get('port'), () => {
  console.log(`server started at http://localhost:${app.get('port')}`)
})
