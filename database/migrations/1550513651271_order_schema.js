'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.boolean('paid').default(false)
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
