const jsonServer = require("json-server");

// Create a JSON Server instance
const server = jsonServer.create();

// Create a router using the 'db.json' file as the data source
const router = jsonServer.router("db.json");

// Set up default middlewares (logger, static, cors, etc.)
const middlewares = jsonServer.defaults();

// Use the middlewares
server.use(middlewares);

// Share the database of the router with jsonServerAuth
server.db = router.db;

// Use the router for handling API routes
server.use(router);

// Start the server on port 3001
server.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("JSON Server is running port 3001");
});
