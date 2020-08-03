module.exports = {


  friendlyName: 'Delete',


  description: 'Delete corpovvf.',


  inputs: {
    id: {
      type: 'number',
      required: true
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
    var corpo = await Corpovvf.findOne({id: inputs.id});
    if (corpo === null || corpo === undefined || corpo === false){
      return [{error: '401', message: 'Unauthorized'}];
    }
    if (inputs.password !== corpo.password){
      return [{error: '401', message: 'Unauthorized'}];
    }
    const record = await Corpovvf.destroy({id: inputs.id}).fetch();
    if (record === 0){
      return {error: true};
      //throw({invalid: {error: 'Record doesn\'t exist'}});
    }
    return {error: false};
    //return {status: 'OK'};
  }


};
