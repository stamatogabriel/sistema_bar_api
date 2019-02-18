'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderDeskSchema extends Schema {
  up () {
    this.create('order_desks', (table) => {
      table.increments()
      table.timestamps()
      table.integer('order_id')
      table.integer('desk_id')
    })
  }

  down () {
    this.drop('order_desks')
  }
}

module.exports = OrderDeskSchema
