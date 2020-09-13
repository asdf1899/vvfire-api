module.exports = {


  friendlyName: 'Complete',


  description: 'Complete missione.',


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
    var updateMissione = await Missione.updateOne({ id: inputs.id })
    .set({
      'completed': true,
      'endTime': inputs.endTime
    });
    if (updateMissione === null || updateMissione === undefined || updateMissione.length === 0){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{missione: updateMissione, error: false}];
  }


};
