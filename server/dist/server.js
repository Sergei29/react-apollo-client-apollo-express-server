"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_jwt_1 = __importDefault(require("express-jwt"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("./db"));
const port = 9000;
const jwtSecret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");
const app = express_1.default();
app.use(cors_1.default(), body_parser_1.default.json(), express_jwt_1.default({
    secret: jwtSecret,
    algorithms: ["Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64"],
    credentialsRequired: false,
}));
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = db_1.default.users.list().find((user) => user.email === email);
    if (!(user && user.password === password)) {
        res.sendStatus(401);
        return;
    }
    const token = jsonwebtoken_1.default.sign({ sub: user.id }, jwtSecret);
    res.send({ token });
});
app.listen(port, () => console.info(`Server started on port ${port}`));
