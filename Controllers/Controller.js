const { User,Joke } = require('../models/index')
const { compare } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')


class Controller {

    static register(req,res){
        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        })
        .then(data => {
            res.status(201).json({data})
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
    }

    static login(req,res){
        User.findOne({where: {email: req.body.email}})
        .then(data => {
            if (data){
                console.log('masuk sini')
                
                if(compare(req.body.password,data.password)){
                    const access_token = generateToken({id: data.id, email:data.email})
                    console.log(req.body)
                    res.status(200).json({access_token})
                } else {
                    console.log('masuk ke salah')
                    res.status(404).json({message: 'email/password salah'})
                }
                
            }else {
                res.status(404).json({message: 'email/password salah'})
            }
        })
        .catch(error => {
            res.status(401).json({message: 'email/password salah'})
        })
    }


}

module.exports = Controller