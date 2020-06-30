function createPerson(name) {
    return {
        fullName: name,
        lastName: name.split(' ')[1], //get the last name by spliting the name at the space and taking the second one
        speak:function () {
            console.log("My name is ", name)
        }
    };
};


var people = ["Shannon Reed", "Jane Doe", "first last"]

var peopleList = []

var person1 = createPerson('Jack Jill')

console.log(person1)


//For Loop

for (var i = 0; i < people.length; i++) {
    person = createPerson(people[i])
    peopleList.push(person)
    //or
    peopleList.push(createPerson(people[i]))

}
            //OR

for (var i = 0; i < people.length; i++) {
    peopleList.push(createPerson(people[i]))

}



