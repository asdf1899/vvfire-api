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
    var SQL = 'SELECT * FROM posizioni WHERE posizioni.date > $1 AND posizioni.fkRicerca = $2 GROUP BY posizioni.fkVigile ORDER BY date DESC';
    var rawResult = await sails.sendNativeQuery(SQL, [inputs.time, inputs.fkRicerca]);
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
