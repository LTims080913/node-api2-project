const express = require('express')

const server = express();
server.use(express.json())

const postsRouter = require('./routers/posts-router')

server.get('/', (req, res) => {
    // res.json({api: 'Up and Running'})
    res.json({query: req.query, params: req.params, headers: req.header})
})

server.use('/api/posts', postsRouter)

server.listen(8000, () => console.log('\n == API is Running on localhost:8000 == \n'))

