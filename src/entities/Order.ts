import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Product } from "./Produt"; 

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("date")
  orderDate!: string;

  @Column()
  customerName!: string;

  @ManyToOne(() => Product, product => product.orders, { eager: true })
  product: Product | undefined;
}