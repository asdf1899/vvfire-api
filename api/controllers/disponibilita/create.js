module.exports = {


  friendlyName: 'Create',


  description: 'Create disponibilita.',


  inputs: {
    date: {
      type: 'string',
      required: true,
      allowNull: false
    },
    startTime: {
      type: 'string',
      required: true,
      allowNull: false
    },
    endTime: {
      type: 'string',
      required: true,
      allowNull: false
    },
    fkVigile: {
      type: 'number',
      required: true,
      allowNull: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    await Disponibilita.create({
      'date': inputs.date,
      'startTime': inputs.startTime,
      'endTime': inputs.endTime,
      'fkVigile': inputs.fkVigile
    });
    return [{error: false}];
  }


};
