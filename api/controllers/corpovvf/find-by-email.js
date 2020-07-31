module.exports = {


  friendlyName: 'Find by email',


  description: '',


  inputs: {
    email:{
      type: 'string',
      required: true,
      unique: true,
      allowNull: false
    }
  },


  exits: {
    notFound: {
      description: 'No user was found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs) {
    var corpo = await Corpovvf.findOne({email: inputs.email});
    if (corpo === null || corpo === undefined || corpo === false){
      return [{error: '404', message: 'Not Found'}];
    }
    let getCorpo = [{ 'id': corpo.id, 'name': corpo.name, 'email': corpo.email, 'phone':corpo.phone}];
    return [{corpovvf: getCorpo, error: false}];
  }


};
