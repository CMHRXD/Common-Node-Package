"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Created"] = "created";
    OrderStatus["Cancelled"] = "cancelled";
    OrderStatus["Reserved"] = "reserved";
    OrderStatus["Expired"] = "expired";
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
