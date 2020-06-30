https://underscorejs.org/
//Produces a new array of values by mapping each value
// in the list through a transformation function/ iterator
//Each invocation of the iterator is called with three arguments. if the list is 
//a Javascript object, iterator's arguments will be (value, key, list)
//Map returns an array
//Used to take list and transfrom them into another array
//Takes a list and callback function
//Whatever the callback function return goes into the object
// _.map([1,2,3], function(v,i,list){console.log(v)})

//Implementation
 
// const _ = {}

// _.map = function(list, callback){
//     //create a empty array for storage
//     var storage = [];
//     //loop
//     for (var i = 0; i < list.length; i++) {
//                             //value, index, list
//         storage.push(callback(list[i], i, list))
//             //Push the callback to storage
                    
//         }
//         return storage;
//     } 


//     _.map([1,2,3], function(value){return value + 1;})

//Return array 2,3,4




const _ = {}

_.map = function(list, callback){
    //create a empty array for storage
    var storage = [];
    //loop
    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list))
    })
    
        return storage;
    } 


    _.map([1,2,3], function(value){return value + 1;})













const cars = ['chevy', 'ford', 'buick', 'toyota']

const makeCar = function(item) {
    return `broken ${item}`;
}

const newCars = _.map(cars, makeCar)

newCars;


function createPerson(name) {
    return {
        fullName: name,
        lastName: name.split(' ')[1], //get the last name by spliting the name at the space and taking the second one
        // speak:function () {
        //     console.log("My name is ", name)
        // }
        speak() {log(`my name is ${name}`);}
    };
};

var people = ["Shannon Reed", "Jane Doe", "first last"]

const newPeople = _.map(people, createPerson);

_.each
newPeople;
