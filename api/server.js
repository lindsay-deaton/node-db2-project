const express = require("express")
const helmet = require('helmet')
//helmet protects the headers

const carsRouter = require("./cars/cars-router.js")

const server = express()

server.use(helmet())
server.use(express.json())

server.use("/api/cars", carsRouter)

module.exports = server;