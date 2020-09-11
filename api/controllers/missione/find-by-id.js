module.exports = {


  friendlyName: 'Find by id',


  description: '',


  inputs: {
    idMissione: {
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
    let missione = await Missione.findOne({id: inputs.idMissione});
    if (missione === null || missione === undefined || missione === false || missione.length === 0){
      return [{error: '404', message: 'Not Found'}];
    }
    let ricerca = await RicercaPersona.findOne({id: missione.fkRicerca});
    if (ricerca === null || ricerca === undefined || ricerca === false || ricerca.length === 0){
      return [{error: '404', message: 'Not found'}];
    }
    if (inputs.fkCorpovvf !== ricerca.fkCorpovvf){
      return [{error: '401', message: 'Unauthorized'}];
    }
    return [{missione: missione, error: false}];
  }


};
