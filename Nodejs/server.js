const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.end("Welcome to my site!");
});

app.get("/complement", function(req, res) {
  res.end("You look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");









//SERVER WITHOUT EXPRESS
// const http = require("http");

// const server = http.createServer(function(req, res) {
//   console.log(`user visited ${req.url}`);
//   res.end("Hello I am responding to your connection request!");
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000);