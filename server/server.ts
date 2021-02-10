import express from "express";
import expressJwt from "express-jwt";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import db from "./db";

const port = 9000;
const jwtSecret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");
const app = express();

app.use(
  cors(),
  bodyParser.json(),
  expressJwt({
    secret: jwtSecret,
    algorithms: ["Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64"],
    credentialsRequired: false,
  })
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.users.list().find((user) => user.email === email);

  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({ sub: user.id }, jwtSecret);
  res.send({ token });
});

app.listen(port, () => console.info(`Server started on port ${port}`));
