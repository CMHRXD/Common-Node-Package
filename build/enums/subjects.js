"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subjects = void 0;
//Enum is a special type in TS that allows us to define a set of named constants.
var Subjects;
(function (Subjects) {
    Subjects["TicketCreated"] = "ticket:created";
    Subjects["TicketUpdated"] = "ticket:updated";
    Subjects["OrderCreated"] = "order:created";
    Subjects["OrderUpdated"] = "order:updated";
    Subjects["OrderCancelled"] = "order:cancelled";
    Subjects["ExpirationComplete"] = "expiration:complete";
    Subjects["PaymentCreated"] = "payment:created";
})(Subjects = exports.Subjects || (exports.Subjects = {}));
