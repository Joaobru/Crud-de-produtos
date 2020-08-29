import Product from "../models/Products";

class ProductsController {
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async index(req, res) {
    const product = await Product.findAll();

    return res.json(product);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    return res.json(product);
  }

  async update(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    const productUp = await product.update(req.body);

    return res.json(productUp);
  }
  async delete(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    await product.destroy();

    return res.json({"mensagem":"Produto apagado com sucesso"})
  }
}

export default new ProductsController();
