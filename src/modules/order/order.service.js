import Order from "./order.model.js";
import Cart from "../cart/cart.model.js";

export const createOrder = async (userId, data) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  const totalAmount = cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const order = await Order.create({
    user: userId,
    items: cart.items,
    totalAmount,
    address: data.address,
    paymentMethod: data.paymentMethod,
  });

  cart.items = [];
  await cart.save();

  return order;
};

export const getMyOrders = async (userId) => {
  return await Order.find({ user: userId }).sort({ createdAt: -1 });
};

export const getOrderById = async (orderId) => {
  return await Order.findById(orderId).populate("items.product");
};