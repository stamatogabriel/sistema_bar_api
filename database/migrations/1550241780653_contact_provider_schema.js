'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactProviderSchema extends Schema {
  up () {
    this.create('contact_providers', (table) => {
      table.increments()
      table
        .integer('provider_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('phone').notNullable()
      table.string('contact').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contact_providers')
  }
}

module.exports = ContactProviderSchema
