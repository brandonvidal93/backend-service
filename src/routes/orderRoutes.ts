import { Router } from "express";
import {
  getAllOrders,
  getOrderById,
  deleteOrder,
  createOrder,
  // updateOrder,
} from "../controllers/orderController";

const orderRoutes = Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Obtiene una lista de todos los pedidos
 *     description: Retorna todos los pedidos almacenados en el sistema.
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Una lista de pedidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
orderRoutes.get("/", getAllOrders);

/**
 * @swagger
 * /orders/{id}:
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido no encontrado.
 */
orderRoutes.get("/:id", getOrderById);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crea un nuevo pedido
 *     description: Crea un nuevo pedido en el sistema.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Error en la solicitud.
 */
orderRoutes.post("/", createOrder);

/**
 * @swagger
 * /orders/{id}:
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
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Pedido actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido no encontrado.
 *       400:
 *         description: Error en la solicitud.
 */
orderRoutes.put("/:id");

/**
 * @swagger
 * /orders/{id}:
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