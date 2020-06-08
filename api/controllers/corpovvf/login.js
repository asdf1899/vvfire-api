var webtoken = require('../services/jwt.js');

module.exports = {


  friendlyName: 'Login',


  description: 'Login corpovvf.',


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
      description: 'No user was found in the database.'
    },
    passwordError: {
      description: 'Password doesn\'t match with the name'
    }
  },


  fn: async function (inputs) {
    var corpo = await Corpovvf.findOne({email: inputs.email});
    if (!corpo){
      throw({notFound: {name: inputs.name, error: 'Corpovvf not found'}});
    }
    if (inputs.password !== corpo.password){
      throw ({passwordError: {error: 'Invalid password'}});
    }
    let getCorpo = [{ 'id': corpo.id, 'name': corpo.name, 'email': corpo.email, 'phone':corpo.phone}];
    return [{token: webtoken.sign(corpo), corpovvf: getCorpo}];

  }


};
