import * as cartService from "./cart.service.js";

export const getCart = async (req, res) => {
  const cart = await cartService.getCart(req.user.id);
  res.json(cart);
};

export const addItem = async (req, res) => {
  const item = await cartService.addItem(req.user.id, req.body);
  res.status(201).json(item);
};

export const updateItem = async (req, res) => {
  const item = await cartService.updateItem(
    req.user.id,
    req.params.itemId,
    req.body
  );
  res.json(item);
};

export const removeItem = async (req, res) => {
  try {
    await cartService.removeItem(req.user.id, req.params.itemId);
    res.json({
      success: true,
      message: "Item removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const clearCart = async (req, res) => {
  await cartService.clearCart(req.user.id);
  res.json({ message: "Cart cleared" });
};