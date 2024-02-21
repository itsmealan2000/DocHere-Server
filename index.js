//import
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Router = require('./Routes/route');
const DocServer = express();
require('./db/connectiondb')

//cors
DocServer.use(cors());  // Cross-Origin Resource Sharing (CORS)
DocServer.use(express.json())
DocServer.use(Router);

const PORT = 3000

DocServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

DocServer.get('/', (req, res) => {
    res.status(200).send(`<h1>DocHere ${PORT} </h1>`)
})