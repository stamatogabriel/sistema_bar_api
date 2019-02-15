"use strict";

const SearchableKeys = use("App/Models/Traits/SearchableKeys");
const Model = use("Model");

class Provider extends Model {
  static boot() {
    super.boot();
    this.addTrait("SearchableKeys");
  }

  contact_providers() {
    return this.hasMany("App/Models/ContactProvider");
  }
}

module.exports = Provider;
