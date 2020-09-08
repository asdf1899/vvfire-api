module.exports = {


  friendlyName: 'Update',


  description: 'Update missione.',


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
    var updateMissione = await Missione.updateOne({ id: inputs.id })
    .set({
      'id': inputs.id,
      'name': inputs.name,
    });
    if (updateMissione === null || updateMissione === undefined || updateMissione.length === 0){
      return [{error: '404', message: 'Not Found'}];
    }
    return [{missione: updateMissione, error: false}];
  }


};
