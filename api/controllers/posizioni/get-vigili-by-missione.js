module.exports = {


  friendlyName: 'Get vigili by missione',


  description: '',


  inputs: {
    fkMissione: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    /*let idVigili = await Posizioni.find(
      {
        where: {
          fkMissione: inputs.fkMissione
        },
        select: ['fkVigile']
      }
    ).distinct(['fkVigile']);
    console.log(idVigili);
    return idVigili;*/
    var SQL = 'SELECT DISTINCT posizioni.fkVigile FROM posizioni WHERE posizioni.fkMissione = $1 ORDER BY date DESC';
    var rawResult = await sails.sendNativeQuery(SQL, [inputs.fkMissione]);
    return rawResult.rows;
  }


};
