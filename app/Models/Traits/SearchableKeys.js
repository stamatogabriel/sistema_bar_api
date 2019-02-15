'use strict'

class SearchableKeys {
  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)

    Model.scopeKeyLikes = function (query, fields, filter) {
      if (filter && fields) {
        query = query.andWhere(function () {
          fields.map(field => {
            return this.orWhere(field, 'like', `%${filter}%`)
          })
        })
      }

      return query
    }
  }
}

module.exports = SearchableKeys
