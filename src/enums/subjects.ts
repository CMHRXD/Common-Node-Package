//Enum is a special type in TS that allows us to define a set of named constants.
export enum Subjects { // This is the list of subjects that we want to use.
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',

    OrderCreated = 'order:created',
    OrderUpdated = "order:updated",
    OrderCancelled = "order:cancelled",

    ExpirationComplete = "expiration:complete",

    PaymentCreated = "payment:created"
}

 