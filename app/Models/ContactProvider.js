'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ContactProvider extends Model {
  providers(){
    return this.belongsTo('App/Models/Provider')
  }
}

module.exports = ContactProvider
