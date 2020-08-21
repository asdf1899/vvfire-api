module.exports = {


  friendlyName: 'Show',


  description: 'Show disponibilita.',


  inputs: {
    idcorpo: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let allVigili = await Vigile.find({
      where: {fkCorpovvf: inputs.idcorpo},
      select: ['id']
    });
    if (allVigili === null || allVigili === undefined || allVigili === false){
      return [{error: '404', message: 'Vigili not Found'}];
    }
    let listaVigili =[];
    for (let i=0; i < allVigili.length; i++){
      listaVigili.push(allVigili[i].id);
    }
    let disponibilita = await Disponibilita.find({
      fkVigile: {in: listaVigili}
    });
    return [{disponibilita: disponibilita, error: false}];
  }


};
