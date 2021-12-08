const express = require('express')
const app = express()

const hello = require('./hello.js')
const profile = require('./profile.js')

app.use(hello)
app.use(profile)


if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app