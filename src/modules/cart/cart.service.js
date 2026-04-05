import Cart from "../../models/cart.model.js";

export const getCart = async (userId) => {
  return await Cart.findOne({ user: userId }).populate("items.product");
};

export const addItem = async (userId, data) => {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }

  const existingItem = cart.items.find(
    (item) => item.product.toString() === data.productId
  );

  if (existingItem) {
    existingItem.quantity += data.quantity;
  } else {
    cart.items.push({
      product: data.productId,
      quantity: data.quantity,
    });
  }

  await cart.save();
  return cart;
};

export const updateItem = async (userId, itemId, data) => {
  const cart = await Cart.findOne({ user: userId });

  const item = cart.items.id(itemId);
  item.quantity = data.quantity;

  await cart.save();
  return cart;
};

export const removeItem = async (userId, itemId) => {
  const cart = await Cart.findOne({ user: userId });
  cart.items.id(itemId).remove();
  await cart.save();
};

export const clearCart = async (userId) => {
  await Cart.findOneAndUpdate(
    { user: userId },
    { items: [] }
  );
};