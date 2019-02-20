'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.integer('desk').unsigned().notNullable()
      table.integer('ticket_id')
        .unsigned()
        .references('id')
        .inTable('tickets')
      table.boolean('close').default(false)
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
