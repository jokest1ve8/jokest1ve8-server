const express = require('express')
const router = express.Router()
const JokeController = require('../Controllers/jokecontroller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

//router.use(authentication)
router.get('/',JokeController.getJokes)
router.delete('/:id',authorization,JokeController.deleteJoke)


module.exports = router