const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";

//   We called a method on document. which is a globally available variable in the browser
//   that you use to interact with the HTML and CSS. It a lot of methods that you can use.
//   In this case, we're using the querySelector in which you pass in a CSS selector and
//   it returns to you the first one of that matches selector that it finds (if you have
//   many of them on the page, you get just the first one.) From there, we have a JavaScript
//   pointer to the div.red-square tag stored in the redSquare variable which means we can
//   start manipulating it. We then use the style object which represents all the CSS styles
//   that are being applied to that object at that time. We then set the backgroundColor of
//   that element. Notice it is backgroundColor and not background-color (camelCasing vs kebab-casing).
//   This is how you interact with CSS via JavaScript. Anything that's kebab-cased like padding-right
//   becomes camelCased, like paddingRight. While annoying, it'd be even more annoying if they didn't
//   switch it since everything in JavaScript is camelCased. We then just assign that to be whatever
//   value we want. This works with any CSS property, eg: tag.style.marginBottom = '50px'. There's a
//   lot more you can do with an element than just modifying its style. You can add more HTML into it,
//    remove it, change the text, search for different elements inside of it, get its position on the
//    page, clone it, and a lot more.

const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});

// We grab the button via querySelector and store it in the JavaScript variable button.
// We then call the addEventListener method on the button. This takes two parameters
// (no need to memorize this, you can always look it up): the name of the event you want
// respond to, which in this case is the click event, and a function that is called
// whenever that event happens. This function is often called a callback because it gets
// called back whenever the event happens. We then call a function called alert. alert is
// a super, super annoying function that pops up a dialog window with whatever you call it with.
// People often get confused seeing }); on the last line. The first } is closing the function, the
// second ) is closing the function call of addEventListener, and the ; ends the statement.

// const input = document.querySelector('.input-to-copy');
// const paragraph = document.querySelector('.p-to-copy-to');

// input.addEventListener("keyup", function() {
//   paragraph.innerText  = input.value;
// });

// Try typing into the input. You'll see whatever text you type into the input will instantly
// be reflected in the p tag. Pretty cool, right? We're now using the keyup event. This event
// happens whenever you release a key after pressing it. As you may guess, there is a keydown
// event too that is fired whenver you press a key. We're using keyup because keydown happens
// before a key actually registers which means we would always be one key behind. We're reference
// input.value. The value property of an input reflects whatever the user has typed into the input.
// We're taking whatever is in input.value and passing that directly into the paragraph.innerText.
// Since that function is called every time a user types into the input, it keeps the two in sync!

const input = document.querySelector(".color-input");
const paragraph = document.querySelector(".color-box");

input.addEventListener("change", function () {
  paragraph.style.backgroundColor = input.value;
});

document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
    event.target.innerText = "CLICKED";
  });

//   You can see that we only bound event listener, and that was the div above it.
//   Then, when we click the button, we're using the event parameter that is being
//   passed into the callback. You may be wondering where that came from. It was
//   always there, we just ignoring it. An event listener's first parameter is always
//   an event object. There's lots of information on the event object but we're most
//   concerned with event.target. target is the tag that the event originated from.
//   In this case it'll be the button that caused the event. And we know that with
//   tags you can use the innerText property to get the text inside of them. That's
//   how we able to alert the correct number. Cool, right? But if we click anywhere on the div
// the alert pops up, lets fix this

// document.querySelector('.button-container').addEventListener('click', function(event) {
//     if (event.target.tagName === 'button') {
//       alert(`You clicked on button ${event.target.innerText}`);
//     }
// });
