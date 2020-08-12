module.exports = {


  friendlyName: 'Find by id',


  description: 'Get id by Grado',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var grado = await Grado.find({
      where: {id: inputs.id}
    });
    if (grado === null || grado === undefined || grado === false){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{grado: grado, error: false}];
  }


};
