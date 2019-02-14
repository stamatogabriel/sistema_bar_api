const Desk = use('App/Models/Desk')

class DeskController {

  async index({ request, response, view }) {
    const desks = await Desk.all();

    return desks;

  }

  async store({ request, response }) {
    const data = request.all();

    const desk = await Desk.create(data);

    return desk;
  }

    async show({ params, request, response, view }) {
      const { number } = request.all();

      const desk = await Desk.find(number);
  
      return desk;  
  
    }

  async update({ params, request, response }) {
    const { places } = request.all();

    const desk = await Desk.findOrFail(params.id)

    desk.places = places;

    desk.save();

    return desk;

  }
  async destroy({ params, request, response }) {
    await Desk.findAndDelete(params.id);

  }
}

module.exports = DeskController
