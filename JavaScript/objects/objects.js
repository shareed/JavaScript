const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
  address: {
    street: "1234 House",
    apt: "5"
  },
  pet: {
    kind: "dog",
  speak() {
    console.log("woof woof");
  }
}
};
console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; definitely prefer using the other one
console.log(person.address.street);
console.log(person.pet.speak());



```Using the above object, wouldn't it be nice if we could use a function to nicely print where 
that person was from?```
const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA"
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};

console.log(me.getAddress());

```
this keyword, is a strange, complicated, and difficult concept in JavaScript known as context 
and trips up all sorts of people, new and old to the language. If you decide to pursue a career 
as a developer, interviewers will often ask questions about context in JavaScript. It's worth 
investment to understand how it works. In the simplest form, anywhere you are in JavaScript you 
have a context you are in. You can reference that context by using this. If I just reference this 
from the outtermost layer, it'll be the global object, which in the browser is something called 
window. window already has a bunch of stuff on it.```


console.log(this === window); //true
console.log(this.scrollY); //0
console.log(window.scrollY);//0



```As you can see from the first line, you can see that in this context, window 
is the this at that time. However, in the example above when we're doing the address, 
the this is the object since when I call the function, it's created inside of an object. 
That object then becomes this when getAddress is called. As soon as the function completes, 
the context is destroyed and the context goes back to being what it was before, in this 
case window. A good rule of thumb (that is unfortunately not always true) is that if you're
 inside an object of some sort, the this will be that object. If not, it'll be the global 
 object, window. There are crazy exceptions to this and you can even manipulate it yourself. 
 For now, operate with that definition. It's a deep-and-dark rabbit hole to go down so let's 
 continue and you can take Kyle Simpson's course later where he goes in depth on it.```
































// Create an object using bracket and dot notation 
// that represents the characters and related data
//  you may find in a game of clue


var game = {};

game.murder = "???";

game["weapons"] = [
    {type: 'gun'}, 
    {type: 'shovel'},
    {type: 'knife'},
    {type: 'brick'}
]


game.name = [];
game.name[0] ="Shannon"
game.name.push("Keya")
//["Shannon", "keya"]




// Create an object using bracket and dot notation 
// that represents your family and related data


var family = {};

family["members"] = [
    {name: 'Keya', age: 16},
    {name: 'Keith', age: 14},
    {name: 'Keon', age: 13},
    {name: 'Kitai', age: 4},]

family.room = [];

family.room[0] = 'Kitchen'
//family.push('bedroom') //wrong, you need the name property
family.room.push('bedroom')

console.log(family);



//Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const firstIntern = {
  id: 1, 
  email: "mmelloy0@PushSubscription.edu",
  firstName: "Mitzi",
  gender: "F"
};

const secondIntern = {
  id: 2,
  email: "kdiben1@tinypic.com",
  firstName: "Kennan",
  gender: "M",
  speak: function(sayHello) {
    console.log(`Hello, my name is ${this.firstName}!`);
}
};

const thirdIntern = {
  id: 3,
  email:"kmummery2@wikimedia.org",
  firstName: "Keven",
  gender: "M"
};

const forthIntern = {
  id: 4,
  email: "gmartinson3@illinois.edu",
  firstName: "Gannie",
  gender: "M"
};

const fifthIntern = {
  id: 5,
  email: "adaine5@samsung.com",
  firstName: "Antonietta",
  gender: "F",
  multiplyNums: function (num1, num2) {
    console.log(num1 * num2);
  }
};


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(firstIntern.firstName);
// Kennan's ID
console.log(secondIntern.id);
// Keven's email
console.log(thirdIntern.email);
// Gannie's name
console.log(forthIntern.firstName);
// Antonietta's Gender
console.log(fifthIntern.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log(secondIntern.speak())

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(fifthIntern.multiplyNums(9,6));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  speak: function(sayHello) {
    console.log(`My name is ${this.name}!`);
  },
  child: {
  name: "George",
  age: 50,
  speak: function(sayHello) {
    console.log(`My name is ${this.name}!`);
  },
  grandchild: {
    name: "Sam",
    age: 30,
    speak: function(sayHello) {
      console.log(`My name is ${this.name}!`);
  }
  }
}
}

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.child.age);

// Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age);

// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.child.speak());
// Have the grandchild speak
console.log(parent.child.grandchild.speak());