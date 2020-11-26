const express = require('express')
const indexRouter = express.Router()
const Controller = require('../Controllers/Controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')



indexRouter.post("/register", Controller.register)
indexRouter.post("/login", Controller.login)


module.exports = indexRouter