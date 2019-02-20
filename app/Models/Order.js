'use strict'
const Model = use('Model')

class Order extends Model {
  tickets(){
    return this.belongsTo('App/Models/Ticket')
  }
  product_orders(){
    return this.hasMany('App/Models/ProductOrder')
  }
}

module.exports = Order
