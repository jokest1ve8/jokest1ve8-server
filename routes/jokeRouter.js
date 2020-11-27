const express = require('express')
const router = express.Router()
const JokeController = require('../Controllers/jokecontroller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/',authentication,JokeController.getJokes)
router.get('/userid',authentication,JokeController.getAllJokesByUserId)
router.delete('/:id',authorization,JokeController.deleteJoke)
router.post ('/', JokeController.addJoke)

module.exports = router