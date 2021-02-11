"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrMiddleware = void 0;
const express_jwt_1 = __importDefault(require("express-jwt"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const login_1 = require("../routes/login/login");
const arrMiddleware = [
    cors_1.default(),
    body_parser_1.default.json(),
    express_jwt_1.default({
        secret: login_1.jwtSecret,
        algorithms: ["Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64"],
        credentialsRequired: false,
    }),
];
exports.arrMiddleware = arrMiddleware;
