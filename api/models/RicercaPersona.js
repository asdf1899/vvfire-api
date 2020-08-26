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
      required: true,
      allowNull: false
    },
    endTime: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    },
    completed:{
      type: 'boolean',
      defaultsTo: false,
      allowNull: false
    },
    posizione: {
      collection: 'Posizioni',
      via: 'fkRicerca'
    },
    fkCorpovvf:{
      model: 'Corpovvf'
    }
  },

};

