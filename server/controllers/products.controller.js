import db from '../database/models';
export const createProduct = async (req, res) => {
  try {
    await db.Product.create(req.body);
    return res.status(200).send("Product Added successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at creating product");
  }
};
