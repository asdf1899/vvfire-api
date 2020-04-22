module.exports = {


  friendlyName: 'Show',


  description: 'Show vigile.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    let vigili = await Vigile.find();
    return vigili;
  }


};
