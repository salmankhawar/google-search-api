const express = require('express')
const cors = require('cors')
const { MongoClient} = require('mongodb')
const client = new MongoClient(
  'mongodb+srv://khawarsalman:Ozv15RxPy3B2BENq@google-search.od5xihm.mongodb.net/google-search'
)
const db = client.db('google-search')
const Results = db.collection('Results')
const app = express()


app.use(cors())


app.get('/results', async (req, res) => {
  await client.connect()
  if (!req.query.search)  { 
    res.send([]) 
  } else {
    let searchResults = await Results.find( {$or: [{title: { $regex: req.query.search , $options: 'i'}}, {description: { $regex: req.query.search , $options: 'i'}}, {url: { $regex: req.query.search , $options: 'i'}}]}).toArray()
    res.send(searchResults) 
  }
})


app.get('/', (req, res) => {
    res.send('Welcome to Google Search')
})


app.listen(4000, () => {
  console.log('Listening on 4000')
})