import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Order } from "../entities/Order";
import { Product } from "../entities/Produt";

const orderRepository = AppDataSource.getRepository(Order);
const productRepository = AppDataSource.getRepository(Product);

// GET - Obtener todos los pedidos
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderRepository.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los pedidos." });
  }
};

// GET by ID - Obtener un pedido por ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ["product"],
    });

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Pedido no encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el pedido." });
  }
};

// POST - Crear un nuevo pedido
export const createOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const { orderDate, customerName, productId } = req.body;
    const product = await productRepository.findOneBy({ id: productId });
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
      // return '404'
    }
    const order = new Order();
    order.orderDate = orderDate;
    order.customerName = customerName;
    order.product = product;
    await orderRepository.save(order);

    return res.status(201).json(order);
    // return '201';
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el pedido." });
    // return '500'
  }
};

// PUT - Actualizar un pedido existente
export const updateOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const { orderDate, customerName, productId } = req.body;
    const order = await orderRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (order) {
      if (productId) {
        const product = await productRepository.findOneBy({ id: productId });
        if (!product) {
          // return res.status(404).json({ message: "Producto no encontrado." });
          return 'res.status(404).json({ message: "Producto no encontrado." });'
        }
        order.product = product;
      }
      order.orderDate = orderDate ?? order.orderDate;
      order.customerName = customerName ?? order.customerName;
      await orderRepository.save(order);
      // return res.json(order);
      return 'res.json(order)';
    } else {
      // res.status(404).json({ message: "Pedido no encontrado." });
      return 'res.status(404).json({ message: "Pedido no encontrado." });'
    }
  } catch (error) {
    // res.status(500).json({ message: "Error al actualizar el pedido." });
    return 'res.status(500).json({ message: "Error al actualizar el pedido." });'
  }
};

// DELETE - Eliminar un pedido
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (order) {
      await orderRepository.remove(order);
      res.json({ message: "Pedido eliminado." });
    } else {
      res.status(404).json({ message: "Pedido no encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el pedido." });
  }
};