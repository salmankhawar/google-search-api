const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Google Search')
})



app.listen(4000)