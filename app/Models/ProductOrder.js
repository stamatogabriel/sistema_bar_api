"use strict";

const Model = use("Model");

class ProductOrder extends Model {
  orders(){
    return this.belongsTo('App/Models/Order')
  }
}

module.exports = ProductOrder;
