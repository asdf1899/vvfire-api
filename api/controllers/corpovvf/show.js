module.exports = {


  friendlyName: 'Show',


  description: 'Show corpovvf.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    let corpi = await Corpovvf.find();
    return corpi;
  }


};
