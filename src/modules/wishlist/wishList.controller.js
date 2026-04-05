import * as service from "./wishList.service.js";

export const addToWishlist = async (req, res) => {
  const data = await service.add(req.user._id, req.body.productId);
  res.json(data);
};

export const removeFromWishlist = async (req, res) => {
  const data = await service.remove(req.user._id, req.params.productId);
  res.json(data);
};

export const getWishlist = async (req, res) => {
  const data = await service.get(req.user._id);
  res.json(data);
};