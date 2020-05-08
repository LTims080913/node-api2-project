const express = require('express')

const server = express();
server.use(express.json())

const postsRouter = require('./routers/posts-router')

server.get('/', (req, res) => {
    // res.json({api: 'Up and Running'})
    res.json({query: req.query, params: req.params, headers: req.header})
})

server.use('/api/posts', postsRouter)
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\n == API is Running on localhost:${port} == \n`))

