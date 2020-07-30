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
      description: 'No user was found in the database.',
      responseType: 'notFound'
    },
    passwordError: {
      description: 'Password doesn\'t match with the name',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs) {
    //console.log(inputs);
    //console.log(inputs.email);
    var corpo = await Corpovvf.findOne({email: inputs.email});
    //console.log(corpo);
    if (corpo === null || corpo === undefined || corpo === false){
      //throw({notFound: {name: inputs.email, error: 'Corpovvf not found'}});
      return [{error: '401', message: 'Unauthorized'}];
    }
    if (inputs.password !== corpo.password){
      //console.log('password errata');
      //throw ({passwordError: {error: 'Invalid password'}});
      return [{error: '401', message: 'Unauthorized'}];

    }
    let getCorpo = [{ 'id': corpo.id, 'name': corpo.name, 'email': corpo.email, 'phone':corpo.phone}];
    return [{token: webtoken.sign(corpo), corpovvf: getCorpo, error: false}];

  }


};
