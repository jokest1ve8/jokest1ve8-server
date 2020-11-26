const router = require ("express").Router()
const JokeController = require ("../Controllers/jokecontroller")

router.post ('/', JokeController.addJoke)
router.delete ('/:id', JokeController.deleteJoke)


module.exports = router