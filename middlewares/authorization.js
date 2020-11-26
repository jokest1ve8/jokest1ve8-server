const { Joke } = require('../models')

module.exports = (req,res,next) => {
        Joke.findOne({where: {id: req.params.id}})
        .then(data => {
            if(data){
                if (data.UserId == req.loggedInUser.id){
                    console.log('testing masuk')
                    next()
                } else {
                    res.status(401).json({message: 'you are not authorize with this Joke'})
                }
            } else {
                res.status(404).json({message: 'Joke not found'})
            }

        })
        .catch(error => {
            res.status(404).json({message: 'Joke not found'})
        })
}