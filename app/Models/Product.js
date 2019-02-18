"use strict";


const Model = use("Model");

class Product extends Model {
  order_products(){
    return this.hasMany('App/Models/OrderProduct')
  }
}

module.exports = Product;
