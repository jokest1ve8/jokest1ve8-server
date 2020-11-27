const { verifyToken } = require('../helper/jwt')
const { User } = require('../models')

module.exports = (req,res,next) => {
    try {
        console.log('test masuk authentication')
        const { access_token } = req.headers

        if (!access_token){
            res.status(401).json({message: 'please login first'})
        } else {
            const decoded = verifyToken(access_token)
            req.loggedInUser = decoded
            User.findOne({where: {id: decoded.id}})
            .then(data => {
                if(data){
                    console.log('ada data')
                    next()
                }else {
                    res.status(401).json({message: 'please login first'})
                }
            })
            .catch(error => {
                console.log(error)
                res.status(401).json({message: 'please login first'})
            })
            
        }
    } catch (err) {
        console.log(err)
        res.status(401).json({message: 'please login first'})
    }
}