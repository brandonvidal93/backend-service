import { Router } from "express";
import {
  getAllOrders,
  getOrderById,
  deleteOrder,
  createOrder,
  updateOrder,
} from "../controllers/orderController";

const orderRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: CRUD Relacionado con Orders
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Obtiene una lista de todos los pedidos
 *     description: Retorna todos los pedidos almacenados en el sistema.
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Una lista de pedidos.
 */
orderRoutes.get("/", getAllOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Obtiene un pedido por su ID
 *     description: Retorna un pedido específico basado en su ID.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido obtenido exitosamente.
 *       404:
 *         description: Pedido no encontrado.
 */
orderRoutes.get("/:id", getOrderById);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Crea un nuevo pedido
 *     description: Crea un nuevo pedido en el sistema.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderDate
 *               - customerName
 *               - productId
 *             properties:
 *               orderDate:
 *                 type: string
 *               customerName:
 *                 type: string
 *               productId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
orderRoutes.post("/", createOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Actualiza un pedido existente
 *     description: Actualiza los detalles de un pedido existente basado en su ID.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderDate
 *               - customerName
 *               - productId
 *             properties:
 *               orderDate:
 *                 type: string
 *               customerName:
 *                 type: string
 *               productId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pedido actualizado exitosamente.
 *       404:
 *         description: Pedido no encontrado.
 *       400:
 *         description: Error en la solicitud.
 */
orderRoutes.put("/:id", updateOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Elimina un pedido
 *     description: Elimina un pedido existente del sistema basado en su ID.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido eliminado exitosamente.
 *       404:
 *         description: Pedido no encontrado.
 */
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;