"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const login_1 = require("./routes/login/login");
const middleware_1 = require("./middleware/middleware");
const resolvers_1 = __importDefault(require("./resolvers/resolvers"));
const port = 9000;
const app = express_1.default();
app.use(middleware_1.arrMiddleware);
const typeDefs = apollo_server_express_1.gql(fs_1.default.readFileSync("./schema/schema.graphql", { encoding: "utf8" }));
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.default,
});
apolloServer.applyMiddleware({ app, path: "/graphql" });
app.post("/login", login_1.loginRouter);
app.listen(port, () => console.info(`Server started on port ${port}, GraphQL server at http://localhost:9000/graphql`));
