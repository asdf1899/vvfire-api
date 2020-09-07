module.exports = {


  friendlyName: 'Get vigili by ricerca',


  description: '',


  inputs: {
    fkRicerca: {
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
          fkRicerca: inputs.fkRicerca
        },
        select: ['fkVigile']
      }
    ).distinct(['fkVigile']);
    console.log(idVigili);
    return idVigili;*/
    /*var SQL = 'SELECT DISTINCT posizioni.fkVigile FROM posizioni WHERE posizioni.fkRicerca = $1 ORDER BY date DESC';
    var rawResult = await sails.sendNativeQuery(SQL, [inputs.fkRicerca]);
    return rawResult.rows;*/
    return inputs;
  }


};
