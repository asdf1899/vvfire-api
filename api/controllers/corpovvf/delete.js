module.exports = {


  friendlyName: 'Delete',


  description: 'Delete corpovvf.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const record = await Corpovvf.destroy({id: inputs.id}).fetch();
    if (record === 0){
      throw({invalid: {error: 'Record doesn\'t exist'}});
    }
    return {status: 'OK'};
  }


};
