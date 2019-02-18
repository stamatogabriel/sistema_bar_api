'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderDesk extends Model {
  orders(){
    return this.belongsTo('App/Models/Order')
  }

  desks(){
    return this.belongsTo('App/Models/Desk')
  }
}

module.exports = OrderDesk
