"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenMiddleware = void 0;
//import { currentUser } from "../controllers/auth-controller";
const JWT_Decode_1 = require("../helpers/JWT_Decode");
const tokenMiddleware = (req, res, next) => {
    var _a, _b;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.token)) {
        next();
    }
    const token = (_b = req.session) === null || _b === void 0 ? void 0 : _b.token;
    console.log(req);
    console.log('session: ', req.session);
    console.log('token: ', token);
    try {
        const payload = (0, JWT_Decode_1.decodeToken)(token);
        console.log('payload: ', token);
        req.currentUser = payload;
    }
    catch (error) {
        console.log(error);
    }
    next();
};
exports.tokenMiddleware = tokenMiddleware;
