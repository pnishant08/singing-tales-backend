import * as service from "./review.service.js";

export const addReview = async (req, res) => {
  const data = await service.add(req.user._id, req.body);
  res.json(data);
};

export const getReviews = async (req, res) => {
  const data = await service.getByProduct(req.params.productId);
  res.json(data);
};