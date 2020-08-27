module.exports = {


  friendlyName: 'Show',


  description: 'Show ricercapersona.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let ricerche = await RicercaPersona.find({
      where: {fkCorpovvf: inputs.idcorpo}
    });
    if (ricerche === null || ricerche === undefined || ricerche === false || ricerche === []){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{ricerche: ricerche, error: false}];
  }

};
