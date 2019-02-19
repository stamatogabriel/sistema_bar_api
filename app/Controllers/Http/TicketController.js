"use strict";
const Ticket = use("App/Models/Ticket");

class TicketController {
  async index({ request, response, view }) {
    const tickets = await Ticket.all();

    return tickets;
  }

  async store({ request, response }) {
    const data = request.all();

    const ticket = await Ticket.create(data);

    return ticket;
  }

  async show({ params, request, response, view }) {
    const ticket = await Ticket.findOrFail(params.id);

    return ticket;
  }

  async destroy({ params, request, response }) {
    const ticket = await Ticket.findOrFail(params.id);

    await ticket.delete();
  }
}

module.exports = TicketController;
