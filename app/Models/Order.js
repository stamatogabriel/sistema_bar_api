'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  order_desks(){
    return this.hasMany('App/Models/Desk')
  }

  order_products(){
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Order
