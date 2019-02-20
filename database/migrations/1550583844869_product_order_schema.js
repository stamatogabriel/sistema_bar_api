"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductOrderSchema extends Schema {
  up() {
    this.create("product_orders", table => {
      table.increments()
      table.timestamps()
      table
        .integer("order_id")
        .unsigned()
        .references("id")
        .inTable("orders")
        .notNullable()

      table
        .integer("product_id")
        .references("id")
        .inTable("products")
        .notNullable()
        .unsigned()
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
