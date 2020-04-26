module.exports = {


  friendlyName: 'Update',


  description: 'Update corpovvf.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false
    },
    phone:{
      type: 'number',
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
    var update = await Corpovvf.updateOne({ id: inputs.id })
    .set({
      'name': inputs.name,
      'phone': inputs.phone,
      'email': inputs.email,
      'password': inputs.password,
    });
    return update;
  }


};
