"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderSchema extends Schema {
  up() {
    this.create("orders", table => {
      table
        .increments()
      table.timestamps();
      table
        .integer("desk")
        .unsigned()
        .notNullable();
      table
        .integer("ticket_id")
        .references("id")
        .inTable("tickets")
        .unsigned();
      table.float("total_comanda").unsigned();
      table.boolean("close").default(false);
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrderSchema;
