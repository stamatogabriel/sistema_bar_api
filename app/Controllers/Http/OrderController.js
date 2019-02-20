'use strict'

const Order = use('App/Models/Order')
/*
Pensar em mostrar o valor total da comanda (Order)

 - Vou precisar percorrer a tabela OrderProduct somando os totais dos produtos e salvar o resultado em uma variavel
 - Criação das tuplas da OrderDesk e Product Desk devem ficar no store do Order?? Provável!!!
 - Será outro tipo de método? Sem ser os básicos? Provável
 - Cada ordem terá várias mesas, portanto deverei mostrar as mesas na comanda
 - Mostrar se a comanda está paga (criar método caixa)
 - Não esquecer que, depois de lançado na ordem, retirar o produto do estoque
*/

class OrderController {

  async index({ request, response, view }) {

  }


  async store({ request, response }) {
    const data = request.all()

    const order = await Order.create(data)

    return order
  }


  async show({ params, request, response, view }) {
  }


  async update({ params, request, response }) {
  }


  async destroy({ params, request, response }) {
    const order = await Order.findOrFail(params.id);

    await order.delete();
  }
}

module.exports = OrderController
