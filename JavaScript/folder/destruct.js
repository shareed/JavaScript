var obj = {first: "Shannon", last: "Reed"}
var first = obj.first
var last = obj.last


// Array Destructuring
const [hello, bye] = [true, false]
//first = true
//second = false


// Ob Destructuring

const person = {
    name : "Shannon",
    age: 100,
    race: "African American",
    city: "San Diego"
}

//Extract the age and city using destructing
const [age, city] = [person.age, person.city]
console.log([age, city]);

const {name, age, race, city} = person
console.log({name, age, race, city});


//Omitting values
var [a, ,b] = [1,2,3]
console.log(a, b)
var [, ,b] = [1,2,3]
console.log(b)

//Spread operator
var [a, ...b] = [1,2,3]
console.log(a,b)

//Swapping out variables with temp
var a = 1, b=2;
var temp = a // we need a temp so we do not lose track of the values
a = b
b = temp

//Swapping out variables without temp
var a = 1, b=2;
[b,a] = [a,b];
console.log(a,b);


//Advance Deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);