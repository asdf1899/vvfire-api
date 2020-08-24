/**
 * Vigile.js
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
    surname: {
      type: 'string',
      required: true,
      allowNull: false
    },
    phone:{
      type: 'number',
      unique: true,
      required: true,
      allowNull: false
    },
    autista:{
      type: 'boolean',
      required: true,
      allowNull: false
    },
    admin:{
      type: 'boolean',
      defaultsTo: false,
      allowNull: false
    },
    email:{
      type: 'string',
      required: true,
      unique: true,
      allowNull: false
    },
    password:{
      type: 'string',
      required: true,
      allowNull: false
    },
    fkGrado:{
      model: 'Grado'
    },
    fkCorpovvf:{
      model: 'Corpovvf'
    },
    disponibilita: {
      collection: 'Disponibilita',
      via: 'fkVigile'
    },
    posizioni: {
      collection: 'Posizioni',
      via: 'fkVigile'
    }
  },

};

