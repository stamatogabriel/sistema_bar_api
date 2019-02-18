'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Desk extends Model {
  order_desks(){
    return this.hasMany('App/Models/OrderDesk')
  }
}

module.exports = Desk
