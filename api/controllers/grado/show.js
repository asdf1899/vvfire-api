module.exports = {


  friendlyName: 'Show',


  description: 'Show grado.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    let gradi = await Grado.find();
    return gradi;
  }


};
