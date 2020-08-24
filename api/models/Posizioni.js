/**
 * Posizioni.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    latitude: {
      type: 'number',
      columnType: 'decimal(10, 8)',
      required: true,
      allowNull: false
    },
    longitude: {
      type: 'number',
      columnType: 'decimal(11, 8)',
      required: true,
      allowNull: false
    },
    date: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      allowNull: false
    },
    fkVigile: {
      model: 'Vigile'
    },
    fkRicerca: {
      model: 'RicercaPersona'
    }
  },

};

