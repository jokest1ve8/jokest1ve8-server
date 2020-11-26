const express = require('express')
const indexRouter = express.Router()
const Controller = require('../Controllers/Controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const jokeRouter = require('./jokeRouter')


indexRouter.post("/register", Controller.register)
indexRouter.post("/login", Controller.login)
indexRouter.use('/jokes',jokeRouter)


module.exports = indexRouter