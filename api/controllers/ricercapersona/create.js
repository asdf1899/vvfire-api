module.exports = {


  friendlyName: 'Create',


  description: 'Create ricercapersona.',


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
    fkCorpovvf:{
      type: 'number',
      required: true,
      allowNull: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    await RicercaPersona.create({
      'name': inputs.name,
      'startTime': inputs.startTime,
      'endTime': inputs.endTime,
      'completed': inputs.completed,
      'fkCorpovvf': inputs.fkCorpovvf,
    });
    return [{error: false}];
  }


};
