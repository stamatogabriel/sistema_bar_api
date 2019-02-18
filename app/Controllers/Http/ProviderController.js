const Provider = use("App/Models/Provider");
const Database = use("Database");

class ProviderController {
  async index({ request, response, view }) {
    const providers = await Provider.all();

    return providers;
  }

  async store({ request, response }) {
    const data = request.all();

    const provider = await Provider.create(data);

    return provider;
  }

  async show({ params, request, response, view }) {
    const provider = await Provider.findOrFail(params.id);

    return provider;
  }

  async update({ params, request, response }) {
    const {
      cnpj,
      ie,
      razaoSocial,
      nomeFantasia,
      endereco,
      num,
      bairro,
      cidade,
      uf,
      phone,
      contact
    } = request.all();

    const provider = await Provider.findOrFail(params.id);

    provider.cnpj = cnpj;
    provider.ie = ie;
    provider.razaoSocial = razaoSocial;
    provider.nomeFantasia = nomeFantasia;
    provider.endereco = endereco;
    provider.num = num;
    provider.bairro = bairro;
    provider.cidade = cidade;
    provider.uf = uf;
    provider.phone = phone;
    provider.contact = contact;

    provider.save();

    return provider;
  }

  async destroy({ params, request, response }) {
    const provider = await Provider.findOrFail(params.id);

    await provider.delete();
  }
}

module.exports = ProviderController;
