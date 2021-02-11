"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecret = exports.loginRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../../db"));
const loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
const jwtSecret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");
exports.jwtSecret = jwtSecret;
const proceedLogin = (req, res, next) => {
    const { email, password } = req.body;
    const user = db_1.default.users.list().find((user) => user.email === email);
    if (!(user && user.password === password)) {
        res.sendStatus(401);
        return;
    }
    const token = jsonwebtoken_1.default.sign({ sub: user.id }, jwtSecret);
    res.send({ token });
};
loginRouter.post("/", proceedLogin);
