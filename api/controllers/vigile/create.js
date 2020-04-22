module.exports = {


  friendlyName: 'Create',


  description: 'Create vigile.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false
    },
    surname: {
      type: 'string',
      required: true,
      allowNull: false
    },
    phone:{
      type: 'number',
      unique: true,
      required: true,
      allowNull: false
    },
    autista:{
      type: 'boolean',
      required: true,
      allowNull: false
    },
    admin:{
      type: 'boolean',
      defaultsTo: false,
      allowNull: false
    },
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
    },
    fkGrado:{
      type: 'number',
      required: true,
      allowNull: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var newVigile = await Vigile.create({
      'name': inputs.name,
      'surname': inputs.surname,
      'phone': inputs.phone,
      'autista': inputs.autista,
      'admin': inputs.admin,
      'email': inputs.email,
      'password': inputs.password,
      'fkGrado': inputs.fkGrado,
    });
    return newVigile;
  }


};
