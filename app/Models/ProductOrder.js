'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductOrder extends Model {
  orders(){
    return this.belongsTo('App/Models/Order')
  }

  products(){
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = ProductOrder
