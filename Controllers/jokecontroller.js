const { Joke } = require('../models/index')


class JokeController {

    
    static getJokes(req,res){
        Joke.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json([{message:"Server Error"}])
        })
    }


}

module.exports = JokeController