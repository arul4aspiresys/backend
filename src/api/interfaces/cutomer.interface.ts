import { Order } from "./order.interface";

export interface Customer {
    id: number;
    name: string;
    mobile: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    orders: Order[];
}