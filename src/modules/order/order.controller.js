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

export const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await orderService.updateOrderStatus(
      req.params.id,
      orderStatus
    );

    res.status(200).json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};