#NODEJS
* Connecting layer between chrome v8 engine
* Server Side JS



###SERVER.js
* Bring in the http library from node to handle the connection, it allows us to connect
     `const http = require("http");`   

* **Create a server**, it is what answers when a connection is requested

        const server = http.createServer(function(req, res) {
        console.log(`user visited ${req.url}`);
        res.end("Hello I an answering your connection request!");
        });   
* `(req,res)` comes from HTTP
    * **Request(req)** is an object represnetening everything coming from the request 
    * **Response(res)** is everything you are sending back to the user

* console log the listening port

        console.log("listening on http://localhost:3000");
        server.listen(3000);

* Run `node server.js` in the terminal


##Express
* HTTP is low level and we would have to created a lot of code to get it complete up and running, express gives you a bunch of useful methods on top of HTTP
* a simple server framework for node
* `npm install express`
* **Require express**const express = require("express");
* `const app = express();` is how you create a new server.
* `app.get(url, callback);` is how you handle a new route. A route is how you handle the request when a user hits a particular URL. In this case we set up two, the default home page, /, and /complement. Try visiting both http://localhost:3000 and http://localhost:3000/complement. If you try a different URL from those, it'll give a 404 not found error.