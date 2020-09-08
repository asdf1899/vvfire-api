module.exports = {


  friendlyName: 'Create',


  description: 'Create missione.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false
    },
    startTime: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    },
    endTime: {
      type: 'string',
      columnType: 'datetime',
      required: true,
    },
    completed:{
      type: 'boolean',
      defaultsTo: false,
      allowNull: false
    },
    fkRicerca:{
      type: 'number',
      required: true,
      allowNull: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    await Missione.create({
      'name': inputs.name,
      'startTime': inputs.startTime,
      'endTime': inputs.endTime,
      'completed': inputs.completed,
      'fkRicerca': inputs.fkRicerca,
    });
    return [{error: false}];
  }


};
