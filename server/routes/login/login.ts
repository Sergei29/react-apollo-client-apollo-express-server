import { Router, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import db from "../../db";

const loginRouter = Router();
const jwtSecret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");

const proceedLogin: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;
  const user = db.users.list().find((user) => user.email === email);

  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({ sub: user.id }, jwtSecret);
  res.send({ token });
};

loginRouter.post("/", proceedLogin);

export { loginRouter, jwtSecret };
