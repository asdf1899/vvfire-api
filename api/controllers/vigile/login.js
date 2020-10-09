var webtoken = require('../services/jwt.js');

module.exports = {


  friendlyName: 'Login',


  description: 'Login vigile.',


  inputs: {
    email:{
      type: 'string',
      required: true,
      unique: true,
      allowNull: false
    },
    password:{
      type: 'string',
      required: true,
      allowNull: false
    }
  },


  exits: {
    notFound: {
      description: 'No user was found in the database.',
      responseType: 'notFound'
    },
    passwordError: {
      description: 'Password doesn\'t match with the name',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs) {
    var vigile = await Vigile.findOne({email: inputs.email});
    if (vigile === null || vigile === undefined || vigile === false){
      return [{error: '401', message: 'Unauthorized'}];
    }
    if (inputs.password !== vigile.password){
      return [{error: '401', message: 'Unauthorized'}];
    }
    let getVigile = [{
      'id': vigile.id,
      'name': vigile.name,
      'surname': vigile.surname,
      'phone':vigile.phone,
      'email': vigile.email,
      'autista': vigile.autista,
      'admin': vigile.admin,
      'fkGrado': vigile.fkGrado,
      'fkCorpovvf': vigile.fkCorpovvf
    }];
    return [{token: webtoken.sign(vigile), vigile: getVigile, error: false}];
  }


};
