module.exports = {


  friendlyName: 'Delete',


  description: 'Delete grado.',


  inputs: {
    idGrado: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const record = await Grado.destroy({id: inputs.idGrado}).fetch();
    if (record === 0){
      throw({invalid: {error: 'Record doesn\'t exist'}});
    }
    return {status: 'OK'};
  }


};
