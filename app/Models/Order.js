'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  tickets(){
    return this.belongsTo('App/Models/Ticket')
  }

  product_orders(){
    return this.hasMany('App/Models/ProductOrder')
  }

  products(){
    return this.manyThrough('App/Models/ProductOrder', 'products')
  }
}

module.exports = Order
