module.exports = {


  friendlyName: 'Find by id',


  description: '',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var vigile = await Vigile.find({
      where: {id: inputs.id}
    });
    if (vigile === null || vigile === undefined || vigile === false){
      return [{error: '404', message: 'Not Found'}];
    }
    let currentVigile = vigile[0];
    let getVigile = [{
      'id': currentVigile.id,
      'name': currentVigile.name,
      'surname': currentVigile.surname,
      'autista': currentVigile.autista,
      'phone': currentVigile.phone,
      'email': currentVigile.email,
      'fkGrado': currentVigile.fkGrado,
      'fkCorpovvf': currentVigile.fkCorpovvf
    }];
    return [{vigile: getVigile, error: false}];
  }


};
