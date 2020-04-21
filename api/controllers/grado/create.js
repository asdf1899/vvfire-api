module.exports = {


  friendlyName: 'Create',


  description: 'Aggiunge un nuovo grado.',


  inputs: {
    name: {
      type: 'string',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var newGrado = await Grado.create({
      'name': inputs.name
    });
    return newGrado;
  }


};
