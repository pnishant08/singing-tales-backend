import * as orderService from "./order.service.js";

export const createOrder = async (req, res) => {
  const order = await orderService.createOrder(req.user.id, req.body);
  res.status(201).json(order);
};

export const getMyOrders = async (req, res) => {
  const orders = await orderService.getMyOrders(req.user.id);
  res.json(orders);
};

export const getOrder = async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  res.json(order);
};