import * as ProductService from "./product.service.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

export const createProdduct = async (req, res) => {
  try {
    let imageUrl = req.body.image || "";
    let imagePublicId = "";

    if (req.file) {
      const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

      if (!cloudinaryResponse) {
        return res.status(500).json({ error: "Image upload failed" });
      }

      imageUrl = cloudinaryResponse.secure_url;
      imagePublicId = cloudinaryResponse.public_id;
    }

    const product = await ProductService.createProduct({
      ...req.body,
      price: Number(req.body.price),
      image: imageUrl,
      imagePublicId,
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
};

export const updateProduct = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.body.price !== undefined && req.body.price !== "") {
      updateData.price = Number(req.body.price);
    } else {
      delete updateData.price;
    }

    if (req.file) {
      const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

      if (!cloudinaryResponse) {
        return res.status(500).json({ error: "Image upload failed" });
      }

      updateData.image = cloudinaryResponse.secure_url;
      updateData.imagePublicId = cloudinaryResponse.public_id;
    } else if (req.body.image) {
      updateData.image = req.body.image;
    }

    const product = await ProductService.updateProduct(req.params.id, updateData);

    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};