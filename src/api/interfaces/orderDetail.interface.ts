export interface OrderDetail {
    orderID: number;
    productID: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}