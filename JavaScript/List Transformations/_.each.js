https://underscorejs.org/

//Looping with _.each, works for arrays and objects, does not return anything
///.each takes two arguments, a list/iteratee and a callback functions/ interator function
//Implementation
const _ = {}

_.each = function(list, callback){
    //return true if list is an array
    if (Array.isArray(list)){
        //loop through the list
        for (var i = 0; i < list.length; i++ ) {
            //call the callback with list item
                    //value, index, list
            callback(list[i], i, list);//
        }
    } else {
        //loop through object
        for (var key in list) {
            callback(list[key], key, list)
            //call the callback with the list
        }
        
    }

}
// _.each(people, function(name){
//     let personObj = createPerson(name);
//     peopleList.push(personObj)
// })
//      //OR
// _.each(people, function(name){
//     peopleList.push(createPerson(name));
// })

_.each(['sally', 'kim', 'jack'], function(name, i, list){
    //if an item comes after the current index
    if (list[i + 1]){
        console.log(name, 'is younger than', list[i + 1] )
    }else {
        console.log(name, 'is the oldest')
    }
    
})



