const express = require('express')
const cors = require('cors')
const { MongoClient} = require('mongodb')
require('dotenv').config()
const client = new MongoClient(
process.env.MONGODB_URL)
const db = client.db('google-search')
const Results = db.collection('Results')
const app = express()
app.use(cors())



app.get('/results', async (req, res) => {
  await client.connect()
  if (!req.query.search)  { 
    res.send([]) 
  } else {
    
    let searchResults = await Results.find( {$text: {$search: req.query.search }}).toArray()
    res.send(searchResults) 
  }
})


app.get('/', (req, res) => {
    res.send('Welcome to Google Search')
})


app.listen(4000, () => {
  console.log('Listening on 4000')
})