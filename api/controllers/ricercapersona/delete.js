module.exports = {


  friendlyName: 'Delete',


  description: 'Delete ricercapersona.',


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
    var ricerca = await RicercaPersona.findOne({id: inputs.id});
    if (ricerca === null || ricerca === undefined || ricerca === false){
      return [{error: '404', message: 'Not found'}];
    }
    if (inputs.fkCorpovvf !== ricerca.fkCorpovvf){
      return [{error: '401', message: 'Unauthorized'}];
    }
    const record = await RicercaPersona.destroy({id: inputs.id}).fetch();
    if (record === 0){
      return {error: true};
    }
    return {error: false};
  }


};
