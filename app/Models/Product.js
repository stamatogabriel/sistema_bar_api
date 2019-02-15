'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const SearchableKeys = use('App/Models/Traits/SearchableKeys')
const Model = use('Model')

class Product extends Model {
  static boot() {
    super.boot();
    this.addTrait('SearchableKeys');
  }
}

module.exports = Product
