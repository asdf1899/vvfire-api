module.exports = {


  friendlyName: 'Delete',


  description: 'Delete missione.',


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
    var missione = await Missione.findOne({id: inputs.id});
    if (missione === null || missione === undefined || missione === false || missione.length === 0){
      return [{error: '404', message: 'Not found'}];
    }
    let ricerca = await RicercaPersona.findOne({id: missione.fkRicerca});
    if (ricerca === null || ricerca === undefined || ricerca === false || ricerca.length === 0){
      return {error: true};
    }
    if (inputs.fkCorpovvf !== ricerca.fkCorpovvf){
      return [{error: '401', message: 'Unauthorized'}];
    }
    const record = await Missione.destroy({id: inputs.id}).fetch();
    if (record === 0){
      return {error: true};
    }
    return {error: false};
  }


};
