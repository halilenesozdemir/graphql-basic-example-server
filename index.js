import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs/typeDefs.js";
import { resolvers } from "./graphql/resolvers/post.js";
import { db } from "./config/db.js";
import { configDotenv } from "dotenv";

configDotenv();
const server = new ApolloServer({ typeDefs, resolvers });

db();
const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`Server ready at: ${url}`);
