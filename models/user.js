'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Joke)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password cannot be empty'
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'firstname cannot be empty'
        }
      }
    },
    lastname: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate(instace,options){
        instace.password = hash(instace.password)
        if(!instace.lastname){
          instace.lastname = instace.firstname
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};