const person = {}

person['info'] = [];

person.info.push({
    name: "Shannon",
    age: 100
})

person.info[1]= {
    name: "Sam",
    age: 200
};

// console.log(person['info'])
// console.log(person.info)
// console.log(person)


// function foo() {
// // for loop initializes a variable and set it to zero
// // as long as the condition is true, increment 
//     for (let i =0; i < person.info.length; i++) {
//         console.log(person.info[i])
//         or
//         console.log(person["info"][i])
//     }
// }
console.log(person)


//Loop through all the properties of the 
//info object in the info array
function findShannon() {

        for (let i =0; i < person.info.length; i++) {
            console.log("outer loop")
            for (key in person.info[i]) {
                console.log("inner loop")
                if (person.info[i][key] == "Shannon") {
                    console.log("found")
            } else {
                console.log('sorry keep looking')
            }
        }
    }
}

// findShannon()


//Destructure nested data structure into two variables with the strings
// "red and "orange

// const redColor = person.info[0].age;
// const orangeColor = person.info[1].age;
// console.log(redColor, orangeColor);
//Destructuring

const [color1, color2] = [person.info[0].age, person.info[1].age]
const [{age: one}, {age: two}] = person.info
console.log(color1, color2)
console.log(one, two)