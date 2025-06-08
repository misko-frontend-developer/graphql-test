const express = require("express");
// const { buildSchema } = require("graphql");
const { ApolloServer } = require("apollo-server-express");
// const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const path = require("path");
const typesArrray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typesArrray,
    resolvers: resolversArray,
  });
  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });
  app.listen(3000, () => {
    console.log("Running Graphql....");
  });
}

startApolloServer();

// const app = express();

// const root = {
//   products: require("./products/products.model"),
//   orders: require("./orders/orders.model"),
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     // rootValue: root,
//     graphiql: true,
//   })
// );
