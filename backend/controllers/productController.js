const ProductModel = require("../models/productModels");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, imgUrl } = req.body;

    // create new product
    let newProduct = new ProductModel({
      title,
      description,
      price,
      imgUrl,
    });

    newProduct = await newProduct.save(); // to save the product in database

    res.status(200).json(newProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.allProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({}); // fetch all products from database

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.singleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const singleProduct = await ProductModel.findById(productId);
    if (!singleProduct) {
      return res.status(404).json({ message: "No such product found" });
    }

    res.status(200).json(singleProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deleteProduct = await ProductModel.findByIdAndDelete(deleteId);

    res.status(200).json(`Product with id ${deleteId} is deleted successfully`);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { title, description, price, imgUrl } = req.body;
    const productId = req.params.id;

    // update product
    let updatedProduct = new ProductModel({
      title,
      description,
      price,
      imgUrl,
      _id: productId,
    });

    updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updatedProduct
    );

    res.status(200).json({
      message: `Product with id ${productId} is updated successfully`,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
