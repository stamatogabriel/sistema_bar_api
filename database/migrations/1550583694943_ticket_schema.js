"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TicketSchema extends Schema {
  up() {
    this.create("tickets", table => {
      table.increments();
      table.timestamps();
      table.integer("numComanda").unsigned();
    });
  }

  down() {
    this.drop("tickets");
  }
}

module.exports = TicketSchema;
