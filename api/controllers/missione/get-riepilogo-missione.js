module.exports = {


  friendlyName: 'Get riepilogo missione',


  description: '',


  inputs: {
    idMissione: {
      type: 'number',
      required: true
    },
    fkCorpovvf: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let groupPositions = [];
    var distinctVigiliSQL = 'SELECT DISTINCT posizioni.fkVigile FROM posizioni, ricercapersona WHERE posizioni.fkMissione = $1 AND ricercapersona.fkCorpovvf = $2 ORDER BY date DESC';
    var distinctVigili = await sails.sendNativeQuery(distinctVigiliSQL, [inputs.idMissione, inputs.fkCorpovvf]);
    for (let i =0; i < distinctVigili.rows.length; i++){
      let tempData = [];
      let fkVigile = distinctVigili.rows[i].fkVigile;
      tempData.push({id: fkVigile});
      var positionsByVigileSQL = 'SELECT posizioni.latitude, posizioni.longitude FROM posizioni WHERE posizioni.fkVigile =$1 AND posizioni.fkMissione = $2';
      var positionsByVigile = await sails.sendNativeQuery(positionsByVigileSQL, [fkVigile, inputs.idMissione]);
      let latLng = [];
      let positions = positionsByVigile.rows;
      if (positions.length !== 0){
        for (let j=0; j < positions.length; j++){
          latLng.push([positions[j].latitude, positions[j].longitude]);
        }
      }
      tempData.push({latLng:latLng});
      var vigileDataSQL = 'SELECT vigile.name as firemanName, vigile.surname as firemanSurname,vigile.phone as firemanPhone, vigile.id as fkVigile FROM vigile WHERE vigile.id = $1';
      var vigileData = await sails.sendNativeQuery(vigileDataSQL, [fkVigile]);
      if (vigileData.rows.length === 0){
        tempData.push({data: {firemanName: 'Sconosciuto', firenameSurname: 'Sconosciuto', 'firenamePhone': 'Sconosciuto', 'fkVigile': null}});
      }else{
        tempData.push({data: vigileData.rows});
      }
      groupPositions.push(tempData);
    }
    return [{error: false, data: groupPositions}];
  }


};
