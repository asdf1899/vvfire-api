module.exports = {


  friendlyName: 'Complete',


  description: 'Complete ricercapersona.',


  inputs: {
    id:{
      type: 'number',
      required: true,
      unique: true,
      allowNull: false
    },
    endTime: {
      type: 'string',
      columnType: 'datetime',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var updateRicerca = await RicercaPersona.updateOne({ id: inputs.id })
    .set({
      'completed': true,
      'endTime': inputs.endTime
    });
    if (updateRicerca === null || updateRicerca === undefined || updateRicerca.length === 0){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{ricerca: updateRicerca, error: false}];
  }


};
