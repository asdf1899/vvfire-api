module.exports = {


  friendlyName: 'Get posizioni by missione',


  description: '',


  inputs: {
    idMissione: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let posizioni = await Posizioni.find(
      {
        where: {
          fkMissione: inputs.fkMissione
        }
      }
    ).sort('date DESC');
    return [{posizioni: posizioni}];
  }


};
