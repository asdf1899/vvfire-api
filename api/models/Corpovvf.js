/**
 * Corpovvf.js
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
    phone:{
      type: 'string',
      required: true,
      unique: true,
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
    vigili:{
      collection: 'vigile',
      via: 'fkCorpovvf'
    },
    ricercapersona:{
      collection: 'ricercapersona',
      via: 'fkCorpovvf'
    }
  }
};

