const { User,Joke } = require('../models/index')

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

    static addJoke (req, res, next) {
        try {
            let data = {
                imageUrl : req.body.imageUrl,
                description : req.body.description,
                UserId : req.loggedInUser.id
            }

            const newJoke = await Joke.create(data)
            res.status(201).json(newJoke)
        } catch (err) {
            res.status(500).json({
                msg : err.name
            })
        }

    }

    static deleteJoke (req, res, next) {
        try {
            let id = req.params.id
            const result = await Joke.destroy({
                where : {id}
            })
            if (!result){
                throw {
                    status : 404,
                    msg : "Jokes not Found"
                }
            } else {
                res.status(201).json({
                    msg : "Joke Success to Delete"
                })
            }
        } catch (err) {
            res.status(500).json({
                msg : err.name
            })
        }
    }
}

module.exports = JokeController