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






###[Deploying to with Microsoft Azure](https://azure.microsoft.com/en-us/services/app-service/?WT.mc_id=introtowebdev-github-brholt)
https://docs.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment


* Click sign up for a free account
* Fill out all the sign up info
* When prompted, click go to the portal
* Feel free to do the tour. It takes a minute or so
* In the side bar, click App Services. App Services is the cloud option for deploying web applications from Microsoft. What's cool about it is that it automatically manages the scaling for you. What that means is that if you website gets really popular, it'll spin up more servers for you and you don't have to do anything. It just does it for you. Once the popularity dies down, it'll spin it back down to one server for you
Click create app service
Click Web App. If you don't see it, search for it. There are other types of apps you can do, but we're going to do an empty web app we're going to conenct to GitHub.
Click the Create button

Name your app. I'm calling mine intro-to-web-dev. You will have to call it something else because I took that name. :D
Leave it under the free trial subscription
Create a new resource group. Microsoft has a lot cloud services like AI, databases, analtyics, etc. You can group these resources together so you can manage them together into a resource group. This will be our only resource in this resource group, so feel free to leave the name the same.
Feel free to leave Application Insight off. It is helpful to debug but we're keeping this simple for now
Check pin to dashboard
Click Create
Wait for the deployment to create. You'll see the status in the new tile you pinned to your dashboard
Click the "Deployment options" tab

Choose GitHub as a source
Authorize GitHub to allow it access to your repos
Choose the repo you want to deploy (I'm using the one from the Node.js section)
Make sure in your package.json looks something like this. Specifically you need the start part of scripts. This is how Azure knows what to do after it finishes running npm install.
When running on a server (often referred to as running in production) you need to listen on port 80. Luckily your server will pass this information to you via a special variable, process.env.PORT. See here how I did it.
Choose the correct branch which is probably master
Wait for your app to deploy. Eventually your website will be visible at http://<your websitename>.azurewbsites.net.