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
        .unique();
        table.timestamps();
    });
  }

  down() {
    this.drop("tickets");
  }
}

module.exports = TicketSchema;
