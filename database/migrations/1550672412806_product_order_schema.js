"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductOrderSchema extends Schema {
  up() {
    this.create("product_orders", table => {
      table.increments();
      table.timestamps();
      table
        .integer("order_id")
        .references("id")
        .inTable("orders")
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("product_id")
        .references("id")
        .inTable("products")
        .notNullable()
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer("qnt")
        .notNullable()
        .unsigned();
      table.float("total").unsigned();
    });
  }

  down() {
    this.drop("product_orders");
  }
}

module.exports = ProductOrderSchema;
