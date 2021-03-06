module.exports = {


  friendlyName: 'Get latest unique positions',


  description: '',


  inputs: {
    fkRicerca: {
      type: 'number',
      required: true
    },
    time: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    console.log(inputs.fkRicerca);
    /*var sqlIdMissioni = 'SELECT id FROM missione WHERE missione.fkRicerca = $1';
    var rawIdMissioni = await sails.sendNativeQuery(sqlIdMissioni, [inputs.fkRicerca]);
    console.log(rawIdMissioni);
    if (rawIdMissioni === []){
      return [];
    }*/
    let idMissioni = await Missione.find(
      {
        where: {
          fkRicerca: inputs.fkRicerca
        },
        select: ['id']
      }
    );
    if (idMissioni.length === 0 || idMissioni === undefined || idMissioni === null){
      return [];
    }
    // restituisce x es 1,4,5
    var idMissionsMap = idMissioni.map( (el) => { return el.id; });
    var SQL = 'SELECT * FROM posizioni WHERE posizioni.date > $1 AND posizioni.fkMissione IN ($2) GROUP BY posizioni.fkVigile ORDER BY date DESC';
    var rawResult = await sails.sendNativeQuery(SQL, [inputs.time, idMissionsMap]);
    return rawResult.rows;
    //let allPositions = await Posizioni.find({
    //  where: {
    //    fkRicerca: inputs.fkRicerca,
    //    date: {'>=': inputs.time}
    //  }
    //}).groupBy('fkVigile');
    //console.log(allPositions);
    //if (allPositions === null || allPositions === undefined || allPositions === false){
    //  return [{error: '404', message: 'Not found'}];
    //}
    //return [{posizioni: allPositions, error: false}];
  }
};
