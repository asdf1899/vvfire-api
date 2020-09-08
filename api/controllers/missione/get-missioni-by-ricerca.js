module.exports = {


  friendlyName: 'Get missioni by ricerca',


  description: '',


  inputs: {
    fkRicerca: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let missioni = await Missione.find(
      {
        where: {
          fkRicerca: inputs.fkRicerca
        }
      }
    ).sort('startTime ASC');
    if (missioni === null || missioni === undefined || missioni === false || missioni.length === 0){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{missioni: missioni, error: false}];
  }


};
