import { CreateOrderDetailDTO } from "./orderDetail.dto";

export type CreateOrderDTO = {
    customerID: number;
    totalAmount: number;
    paymentMethod: string;
    orderDetails: CreateOrderDetailDTO[];
}