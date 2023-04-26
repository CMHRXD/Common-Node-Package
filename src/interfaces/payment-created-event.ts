
export interface PaymentCreatedEvent {
    subject: string;
    data: {
        id: string;
        orderId: string;
        stripeId: string;
    }
}