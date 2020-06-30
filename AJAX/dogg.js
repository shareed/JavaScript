// ```We're using a browser function here called fetch. fetch is the 
// new way of doing AJAX and it is so much easier than the old one. 
// Never use the old one. What fetch returns is called a promise and 
// it's similar to a callback that we used before. A promise, like callbacks, 
// allows you to deal with things that don't happen immediately, things that 
// are asynchronous. In this case, we're waiting for the API to respond with 
// the information we asked for. It takes to request more information over the 
// Internet and we don't want to hold up the rest of our code.
// With a promise, it's an object that represents the future answer to whatever you 
// asked. That's sort of weird, but it ends up being convenient. So, we have this promise, 
// and with it we call the then method on it and give it a function to run once that 
// asynchronous action (the API request) finishes.```


const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);









// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(DOG_URL);// fetch is a way to make ajax calls, returns a promise, an object

// promise//call .then on the promise
//   .then(function(response) {
//       //promise chaining 
//     const processingPromise = response.json();//parses the response into a json object so you can use it, returns a promise
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     console.log(processedResponse);
//   });

// console.log("this will log first");

// promise
//   .then(function(response) {
//     const processingPromise = response.json();
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     const img = document.createElement("img");
//     img.src = processedResponse.message;
//     img.alt = "Cute doggo";
//     doggos.appendChild(img);
//   });