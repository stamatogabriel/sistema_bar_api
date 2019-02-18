'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up () {
    this.create('order_products', (table) => {
      table.increments()
      table.timestamps()
      table.integer('order_id')
      table.integer('product_id')
    })
  }

  down () {
    this.drop('order_products')
  }
}

module.exports = OrderProductSchema
