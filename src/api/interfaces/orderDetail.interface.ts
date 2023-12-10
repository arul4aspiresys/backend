export interface OrderDetail {
    id: number;
    orderID: number;
    productID: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}