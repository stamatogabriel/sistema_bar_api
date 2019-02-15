"use strict";
const Contact = use("App/Models/ContactProvider");
const Provider = use('App/Models/Provider')

class ContactProviderController {
  async index({ request, response, view }) {
    const contact = Contact.all();

    return contact;
  }

  async store({ params, request, response }) {
    const data = request.all();

    const contact = await Contact.create(data);

    return contact;
  }

  /**
   * Display a single contactprovider.
   * GET contactproviders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing contactprovider.
   * GET contactproviders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update contactprovider details.
   * PUT or PATCH contactproviders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a contactprovider with id.
   * DELETE contactproviders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = ContactProviderController;
