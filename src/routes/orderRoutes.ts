import { Router } from "express";
import {
  getAllOrders,
  getOrderById,
  deleteOrder,
  createOrder,
  updateOrder,
} from "../controllers/orderController";

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:id", getOrderById);
orderRoutes.post("/", createOrder);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;