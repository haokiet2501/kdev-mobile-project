const express = require('express')
const 
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(5000, console.log('Server running on port 5000'))