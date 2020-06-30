# JavaScript

You can put any expression (a technical terms, means anything you can stick on the right side of an equal sign, we'll explore it more as we go) inside of the if statement. In this case, we are asking, is two plus two still equal to four. If this is true (I hope so) then again the first block will be run. If not, the second will be.

Let's talk about === for a second. If you use just one = in JavaScript, it means is assigned to. So when we have const isBrianCool = true; you can verbalize that as "The variable isBrianCool is assigned to true". Thus we can't use that inside of the if statement because that's not we mean. We're trying to ask a question, not assign something. We're trying to ask "is two plus two equal to four." Enter the triple equals. Triple equals is the same as asking "is this equal to that." We use the triple equals instead of the double equals because double equals does a lot of funny business that usually we don't want it to do. It does what's called coercion and we'll talk about that below. But in an example 2 == "2" but it does not 2 === "2". String 2 is double equal to number 2 but string 2 is not triple equal to number 2.

There's also !==. This is asking "is this not equal to that". Lastly you can ask with numbers > >= < <= as well to ask if numbers less than or greater than too. For another example:



###Types
A brief note on what is called types in JavaScript. We've danced the idea already and I want to make it a little more concrete for you. Strings, booleans, objects, arrays, numbers, these are different types of types (lol). JavaScript is a language where you don't have to concern yourself a lot with types since it doesn't strictly enforce them (other languages do) but in this problem you are definitely going to have to deal with it.

Whatever you put into the DOM and whatever you get out it are going to strings, every time.
* You'll also see that we used the typeof operator. typeof tells whatever the type of the thing that comes right after it is. This is useful to quickly see what's happening in your code. Be careful because typeof is not always useful, but it is useful for telling numbers and strings apart. 
* There's a function called parseInt(string) that will turn a string of a number ("5") to a number (5).


































































