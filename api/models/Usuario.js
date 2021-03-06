/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      id: {
          columnName: 'cod_usuario',
          required: true,
          type: 'number'
      },

      usuario: {
        type: 'string'
      }

  },

};

