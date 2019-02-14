'use strict'
const Provider = use('App/Models/Provider')

const Schema = use('Schema')

class ProviderSchema extends Schema {
  up () {
    this.create('providers', (table) => {
      table.increments()
      table.string('cnpj').unique().notNullable()
      table.string('ie').unique().notNullable()
      table.string('razaoSocial').notNullable()
      table.string('nomeFantasia').notNullable()
      table.string('endereco', 50).notNullable()
      table.integer('num').notNullable().unsigned()
      table.string('bairro', 20).notNullable()
      table.string('cidade', 20).notNullable()
      table.string('uf', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('providers')
  }
}

module.exports = ProviderSchema
