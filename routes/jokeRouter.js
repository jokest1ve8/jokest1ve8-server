const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/Controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/',Controller.getJokes)


module.exports = router