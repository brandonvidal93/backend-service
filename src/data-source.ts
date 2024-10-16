import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Produt";
import { Order } from "./entities/Order";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true, // No se debe usar en producción
  logging: false,
  entities: [Product, Order],
  migrations:[],
  subscribers:[]
})