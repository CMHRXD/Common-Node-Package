import { OrderStatus } from "../enums/status";
import { Subjects } from "../enums/subjects";

export interface OrderCreatedEvent  {
    subject: Subjects.OrderCreated;
    data:{
        id: string;
        status: OrderStatus;
        userId: string;
        version: number;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        }
    }
}