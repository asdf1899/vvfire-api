module.exports = {


  friendlyName: 'Show',


  description: 'Show vigili.',


  inputs: {
    idcorpo: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let vigili = await Vigile.find({
      where: {fkCorpovvf: inputs.idcorpo}
    }).sort('surname ASC');
    if (vigili === null || vigili === undefined || vigili === false){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{vigili: vigili, error: false}];
  }


};
