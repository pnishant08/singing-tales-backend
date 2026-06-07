import * as ProductService from "./product.service.js";

export const createProdduct = async (req, res) => {
  try {
    const imageUrl = req.file
      ? `/uploads/${req.file.filename}`
      : req.body.image || "";

    const product = await ProductService.createProduct({
      ...req.body,
      price: Number(req.body.price),
      image: imageUrl,
    });

    res.status(201).json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllproducts(req.query);
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getPoductById = async (req, res) => {
    try {
        const product = await ProductService.getPoductById(req.params.id);
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ProductService.deleteProduct(req.params.id);
        res.status(200).json({ message: "Product deleted" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
