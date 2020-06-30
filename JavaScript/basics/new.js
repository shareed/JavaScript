//Procedroual programming, Loops 

//Infinite Loop
// let i = 0;
// while (true) {
//   i++;
//   console.log(i);
// }

```Okay so now what if I want do one thing multiple times? 
I could do something like this. That's annoying though. 
I wish there was a better way.```

let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty); //10
//Okay, so, we want to do this better, let's explore a few ways to do that using loops.

```This is a while loop. The first part works similar to an if statement:
 as long as what's inside that statement is true it will continue running 
 and re-running the body (what's between the { }) until that statement is 
 false. Once that statement is false, it'll break the loop and continue on. 
 This case, we add 1 to friendsAtYourParty until it's 10, and then the next 
 loop, when it's 10, it'll stop because 10 is not less than 10.```
let friendsAtYourParty = 0;
// While true
while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);//10



```Those four lines are equivalent. They all do the exact same thing: 
they add one to the existing total. The second one, the plus-equals 
line, you can put any number there and it'll add that amount to total,
so friendsAtYourParty += 15; would add 15 to the total. It also works
with -= (subtraction,) as well as *= (multiplication,) /= (division,) 
and **= (exponent.) Two last two lines (++ before or after) just signify
add one. They more-or-less mean the same thing (there's a subtle different 
of when it adds one that should never matter to you) but suffice to say 
everyone in the JavaScript community always does the ++ after; I've never 
seen anyone do it before in JavaScript.```

let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;//<----Binary Operator have two things 
friendsAtYourParty += 1; //<----Unary Operator ---> Unary has one thing, adds one to friendsAtYourParty
friendsAtYourParty++;//<----Unary Operator ---> adds one to friendsAtYourParty, best practice for JS
++friendsAtYourParty;//<----Unary Operator ---> adds one to friendsAtYourParty
console.log(friendsAtYourParty); //4


```This is a for loop which is likely the most common kind of loop. 
Inside the parens are three statements and you need all of them. 
The let i = 0; is you defining your control variable that will control 
the loop. For some reason people always use i, not sure why. It's just 
that way. It really could be anything. The second statement i <= 10 is 
just like the while loop, is that's the statement that is as soon as it's 
false it breaks the loop. The last statement, i++ is that happens at the 
end of every loop. In our case, we increment the control variable i so that 
it creeps closer to the end of the loop each time.

An important note: in coding, we start counting from 0. In English, we count
1, 2, 3, 4, 5, etc. but in coding we count 0, 1, 2, 3, 4, etc.. So the fifth 
element of a string is index 4 (where index is how we'd refer to where that 
item is in the string). Index 0 is the first element. It's weird but you get 
used to it and it makes a lot of things easier.```

let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty); //11





```
A brief note on what is called types in JavaScript. We've danced the idea already and 
I want to make it a little more concrete for you. Strings, booleans, objects, arrays, 
numbers, these are different types of types (lol). JavaScript is a language where you 
don't have to concern yourself a lot with types since it doesn't strictly enforce them 
(other languages do) but in this problem you are definitely going to have to deal with it.
Whatever you put into the DOM and whatever you get out it are going to strings, every time.
```

const num = 10;
const div = document.querySelector(".number-target"); // the div right above this block
console.log(num, typeof num); // this is a number here
div.innerText = num;
console.log(div.innerText, typeof div.innerText); // it's a string here

```parseInt(string) that will turn a string of a number ("5") to a number (5).```
console.log(parseInt(div.innerText), parseInt(typeof div.innerText)); // it's a number here
```
Since you're doing math here, you'll need the numbers to actually be of the number type. 
Otherwise you'll get "5" + "5" = "55". There's a function called parseInt(string) that 
will turn a string of a number ("5") to a number (5). You'll also see that we used the 
typeof operator. typeof tells whatever the type of the thing that comes right after it 
is. This is useful to quickly see what's happening in your code. Be careful because typeof 
is not always useful, but it is useful for telling numbers and strings apart.
```