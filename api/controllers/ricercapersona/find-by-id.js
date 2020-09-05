module.exports = {


  friendlyName: 'Find by id',


  description: '',


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
    let ricerca = await RicercaPersona.findOne({id: inputs.id});
    if (ricerca === null || ricerca === undefined || ricerca === false){
      return [{error: '404', message: 'Not found'}];
    }
    if (inputs.fkCorpovvf !== ricerca.fkCorpovvf){
      return [{error: '401', message: 'Unauthorized'}];
    }
    return [{ricerca: ricerca, error: false}];
  }


};
