const express = require('express')
const path = require('path')
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.static(path.join(__dirname, '/public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uri = process.env.MONGO_URI

MongoClient.connect(uri).then(async (client) => {
  console.log('Successful mongo connection')

  const collection = await client.db('cubeGame').collection('scores')

  app.route('/db/insert').post((req, res) => {
    collection.insertOne({ name: req.query.name, score: req.query.score }).then((doc) => {
      console.log('Successful insertion')

      res.send('OK')
    }).catch(err => {
      console.error(err)
      res.status(500).send('Database error!', err)
    })
  })

  app.route('/').get((req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

  app.use((req, res) => {
    res.status(404).type('text').send('404 Not Found')
  })
}).catch((err) => {
  console.error(err)

  app.route('/').get((req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

  app.use((req, res) => {
    res.status(404).type('text').send('404 Not Found')
  })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('Server listening on port ' + PORT))
