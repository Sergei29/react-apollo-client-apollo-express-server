import express from "express";
import expressJwt from "express-jwt";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
import { loginRouter, jwtSecret } from "./routes/login/login";

const port = 9000;
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

app.post("/login", loginRouter);

app.listen(port, () => console.info(`Server started on port ${port}`));
