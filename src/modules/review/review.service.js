import Review from "../../models/review.model.js";

export const add = (userId, data) => {
  return Review.create({ user: userId, ...data });
};

export const getByProduct = (productId) => {
  return Review.find({ product: productId }).populate("user", "name");
};