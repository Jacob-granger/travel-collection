import * as Path from 'node:path'

import express from 'express'
import destinationsRoute from './routes/destinations'
import todosRoute from './routes/todosRoutes'

const server = express()
server.use(express.json())

server.use('/api/v1/destinations', destinationsRoute)
server.use('/api/v1/todos', todosRoute)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
