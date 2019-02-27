"use strict";


const Model = use("Model");

class Product extends Model {
  product_orders(){
    return this.hasMany('App/Models/ProductOrder')
  }

}

module.exports = Product;
