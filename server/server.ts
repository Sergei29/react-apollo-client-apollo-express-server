import fs from "fs";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { loginRouter } from "./routes/login/login";
import { arrMiddleware } from "./middleware/middleware";
import resolvers from "./resolvers/resolvers";

const port = 9000;
const app = express();
app.use(arrMiddleware);

const typeDefs = gql(
  fs.readFileSync("./schema/schema.graphql", { encoding: "utf8" })
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.post("/login", loginRouter);
app.listen(port, () =>
  console.info(
    `Server started on port ${port}, GraphQL server at http://localhost:9000/graphql`
  )
);
