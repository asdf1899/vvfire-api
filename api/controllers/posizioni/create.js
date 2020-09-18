module.exports = {


  friendlyName: 'Create',


  description: 'Create posizioni.',


  inputs: {
    latitude: {
      type: 'number',
      columnType: 'decimal(10, 8)',
      required: true,
      allowNull: false
    },
    longitude: {
      type: 'number',
      columnType: 'decimal(11, 8)',
      required: true,
      allowNull: false
    },
    date: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    },
    fkMissione: {
      type: 'number',
      required: true
    },
    fkVigile: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let missione = await Missione.findOne({id: inputs.fkMissione});
    if (missione === null || missione === undefined || missione === false || missione.length === 0){
      return [{error: '404', message: 'Missione Not Found'}];
    }
    if (missione.completed){
      return [{error: true, message: 'Posizione non salvata in quanto la missione è stata completata'}];
    }
    await Posizioni.create({
      'latitude': inputs.latitude,
      'longitude': inputs.longitude,
      'date': inputs.date,
      'fkVigile': inputs.fkVigile,
      'fkMissione': inputs.fkMissione,
    });
    return [{error: false}];
  }


};
