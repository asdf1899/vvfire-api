module.exports = {


  friendlyName: 'Delete',


  description: 'Delete vigile.',


  inputs: {
    id: {
      type: 'number',
      required: true
    },
    fkCorpovvf: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var vigile = await Vigile.findOne({id: inputs.id});
    if (vigile === null || vigile === undefined || vigile === false){
      return [{error: '404', message: 'Not found'}];
    }
    if (inputs.fkCorpovvf !== vigile.fkCorpovvf){
      return [{error: '401', message: 'Unauthorized'}];
    }
    const record = await Vigile.destroy({id: inputs.id}).fetch();
    if (record === 0){
      return {error: true};
    }
    return {error: false};
  }


};
