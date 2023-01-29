"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function jwtGenerator(id, email) {
    return jsonwebtoken_1.default.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: "15m"
    });
}
exports.jwtGenerator = jwtGenerator;
