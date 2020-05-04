/**
 * RicercaPersona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
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
    fkVigile: {
      model: 'Vigile'
    }
  },

};

