"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProductOrder extends Model {
  products() {
    this.belongsTo("App/Models/Product");
  }

  orders() {
    this.belongsTo('App/Models/Order')
  }
}

module.exports = ProductOrder;
