module.exports = {


  friendlyName: 'Update',


  description: 'Update grado.',


  inputs: {
    id:{
      type: 'number',
      required: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: 'string',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var updatedGrado = await Grado.updateOne({ id: inputs.id })
    .set({
      'name': inputs.name
    });
    return updatedGrado;
  }


};
