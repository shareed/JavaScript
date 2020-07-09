###Scope
* Where you can access variables and functions.
* Global variables and function are accessible to anywhere. 
* Avoid global variables, to avoid the headache of whether or not it is attached to the window object.
* `var` is attached to Window in global scope
* `let` and `const` are not attached to global scope

######Var
* can be redefined
* can be reassigned
* is function scoped

######Let
* cannot be redefined
* can be reassigned
* is block scoped

######Const
* cannot be redefined
* cannot be reassigned
* is block scoped


###Closure
* the ability to reach outside scope to grab data
* a function that references a variable outside of its scope


###Hoisting
*  the ability to call functions and variables before they are declared
*  declrations 
* allows you to put all your commands at the top