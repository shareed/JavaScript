#DOM
* Everything on the DOM is a string
####This is how it works if you have put your code on some server like in a cloud like Microsoft Azure, Amazon Web Services or other places like Bluehost or GoDaddy.
1. You write code in your editor (like VSCode)
2. You put your code on a server so that other people can get it
3. Someone visits your website
    * Their browser makes a request to your server for your index.html
    * Your server sends them a copy of the html
    * The browser reads the HTML, sees you have a my-script.js script tag on there
    * Browsers makes another request for my-script.js from your server
    * Your server sends them a copy of my-script.js
    * The browser reads the JavaScript code and begins executing the code

**Your computer is basically faking this process. It's acting as both the server and the client so that it's easier for you to write code. When you open a file in your browser from your computer, your hard drive is the server. This was a point of confusion for me when starting so I'm sharing it with you.**

* The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.

* Web sites are meant to be reactive to users. In order to be reactive to them, we need to wait for them to do stuff, like click a button or type in an input. The way we do that is we wait for events to happen. An event is created every time certain events happens like when a user clicks something or when they type something. We respond to these events by having what are called event listeners.


####Event Delegation
If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do. Instead what is sometimes easier to do is to use what's called event bubbling. When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element.