export interface Order {
    id: number;    
    customerID: number;
    totalamount: number;
    paymentMethod: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}