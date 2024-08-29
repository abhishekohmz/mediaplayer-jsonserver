// import json-server in index.js

const jsonServer = require("json-server");

// create s server for json file

const mediaPlayerServer = jsonServer.create();

// set up path for json file

const router = jsonServer.router("db.json");

// return a middleware

const middlewares = jsonServer.defaults();

// setup port for running json server

const port = 4000 || process.env.port;

// use middleware and router in server

mediaPlayerServer.use(middlewares);
mediaPlayerServer.use(router);

// to listen server for resolving

mediaPlayerServer.listen(port, () => {
  console.log(
    `mediaplayer Listening on port ${port}, waiting for client request!!`
  );
});
