import WishList from "../../models/wishList.model.js";

export const add = (userId, productId) => {
  return WishList.findOneAndUpdate(
    { user: userId },
    { $addToSet: { products: productId } },
    { new: true, upsert: true }
  );
};

export const remove = (userId, productId) => {
  return WishList.findOneAndUpdate(
    { user: userId },
    { $pull: { products: productId } },
    { new: true }
  );
};

export const get = (userId) => {
  return WishList.findOne({ user: userId }).populate("products");
};