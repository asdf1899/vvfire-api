module.exports = {


  friendlyName: 'Create',


  description: 'Create corpovvf.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false
    },
    phone:{
      type: 'string',
      required: true,
      unique: true,
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
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var newCorpo = await Corpovvf.create({
      'name': inputs.name,
      'phone': inputs.phone,
      'email': inputs.email,
      'password': inputs.password,
    });
    return newCorpo;

  }


};
