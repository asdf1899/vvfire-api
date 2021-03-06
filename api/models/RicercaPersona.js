/**
 * RicercaPersona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      allowNull: false
    },
    startTime: {
      type: 'string',
      columnType: 'datetime',
      required: true
    },
    endTime: {
      type: 'string',
      columnType: 'datetime',
      required: true
    },
    completed:{
      type: 'boolean',
      defaultsTo: false,
      allowNull: false
    },
    missione: {
      collection: 'Missione',
      via: 'fkRicerca'
    },
    fkCorpovvf:{
      model: 'Corpovvf'
    }
  },

};

