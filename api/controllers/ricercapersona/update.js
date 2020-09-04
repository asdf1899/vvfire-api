module.exports = {


  friendlyName: 'Update',


  description: 'Update ricercapersona.',


  inputs: {
    id:{
      type: 'number',
      required: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: 'string',
      required: true,
      allowNull: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var updatedRicerca = await RicercaPersona.updateOne({ id: inputs.id })
    .set({
      'id': inputs.id,
      'name': inputs.name,
    });
    if (updatedRicerca === null || updatedRicerca === undefined){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{ricercapersona: updatedRicerca, error: false}];
  }


};
