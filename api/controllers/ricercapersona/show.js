module.exports = {


  friendlyName: 'Show',


  description: 'Show ricercapersona.',


  inputs: {
    fkCorpovvf: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let ricerche = await RicercaPersona.find({
      where: {fkCorpovvf: inputs.fkCorpovvf}
    });
    if (ricerche === null || ricerche === undefined || ricerche === false || ricerche.length === 0){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{ricerche: ricerche, error: false}];
  }

};
