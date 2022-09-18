const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: Harry Potter"
    },
    {
      "id":"2",
      "title":"Game Review: Call Of Duty"
    },
    {
      "id":"3",
      "title":"Show Review: Dark"
    },
    {
      "id":"4",
      "title":"Show Review: Game of Thrones"
    }
  ])
})

app.listen(5000, () => {
  console.log('listening for requests on port 4000')
})