"use strict";


/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TicketSchema extends Schema {
  up() {
    this.create("tickets", table => {
      table.increments();
      table
        .integer("numComanda")
        .unsigned()
        .unique()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table.timestamps();
        table.boolean('inUse').default(false)

    });
  }

  down() {
    this.drop("tickets");
  }
}

module.exports = TicketSchema;
