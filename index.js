const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())


// Data
let data = [
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
  ]


  //Functions 
  function search(string) {
    let results = data.filter(
      (n) =>
        n.url.toLowerCase().includes(string.toLowerCase()) ||
        n.description.toLowerCase().includes(string.toLowerCase()) ||
        n.title.toLowerCase().includes(string.toLowerCase())
    )
    return results
  }





app.get('/', (req, res) => {
    res.send('Welcome to Google Search')
})

app.get('/results', (req, res) => {
let searchResults = search(req.query.search)
 

}) 



app.listen(4000)