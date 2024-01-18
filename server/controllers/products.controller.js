import db from "../database/models";

export const createProduct = async (req, res) => {
  try {
    await db.Product.create(req.body);
    return res.status(200).json("Product Added successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at creating product");
  }
};

export const getProducts = async (req, res) => {
  try {
    let products = await db.Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at retrieving products list");
  }
};

export const readOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let product = await db.Product.findByPk(id);
    res.json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at retieving the product");
  }
};

export const updateAProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Product.update(req.body, {
      where: {
        id
      }
    });
    res.json("Product updated successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at updating the product");
  }
};

export const deleteAProduct = async (req, res) => {
  const { id } = req.params;
  await db.Product.destroy({
    where: {
      id
    }
  });
  res.json("Product deleted successfully");
};
