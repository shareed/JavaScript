#AJAX (Asynchronous JavaScript And XML)
* XML is no longer a data format used with JS anymore, Json is starting to be more widely used
* API in this context is it's a public server that will allow us to make AJAX calls and it will respond. Most big websites will have some sort of public API, like Twitter for example. There are many public APIs.

**The API we're going to use is dog.ceo. It's a simple, silly API that will give you back random pictures of dogs. Awesome. Make a new project in your favorite editor, add an index.html with the following:**

###JSON( JavaScript Object Notation)
* common way to exchange data over the Internet because it's machine readable but also pretty readable to humans.  we can say process this into a JavaScript object we can us

* If you have a lot stuff to process, it can take a lot of time and computer processing to do so. As such, this made asynchronous as well and it returns a promise. That's why we do the return processingPromise; line. This is called promise chaining. The next then will be called once this processing is finished.

* Once finished, it's a normal JavaScript we can access normally. So try (inside of the function with processedResponse): console.log(processedResponse.status). It should log out "success". Cool, right?

#FETCH (dogg.js)
* a browser function that returns a promise
* a promise allows you to deal with things that don't happen immediately (asynchronous)
* a promise is an object that represents the future answer to whatever you asked.
* when the promise comes back it is just this blob of text-->(response) and we need to turn it into something we can work with(parse) -->(response.json())
* we call the `.then` method on the promise and give it a function with the response as a parameter, to turn it into something we can work with
 to run once that asynchronous action (the API request) finishes
However processing this into JSON is not always trivial. If you have a lot stuff to process, it can take a lot of time and computer processing to do so. As such, this made asynchronous as well and it returns a promise. That's why we do the return processingPromise; line. This is called promise chaining. The next then will be called once this processing is finished.

Once finished, it's a normal JavaScript we can access normally. So try (inside of the function with processedResponse): console.log(processedResponse.status). It should log out "success". Cool, right?