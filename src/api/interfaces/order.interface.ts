import { OrderDetail } from "./orderDetail.interface";

export interface Order {
    id: number;    
    customerID: number;
    totalAmount: number;
    paymentMethod: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    orderDetails?: OrderDetail[];
}