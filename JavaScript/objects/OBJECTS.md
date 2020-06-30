#JavaScript

* Primitive Values (pass by value)
    * string, number, boolean, null, undefined etc...
* Non Primitive Values (passed by reference)
    * object, array, function etc...
* Any thing that uses a dot is an object

![Computer Architecture](img/.png)

####Objects
 *  They contain a bunch of keys and values. The keys are on the left side of the : and represent how you get that piece data of out of the object. name is one such key, and the way I get the name of the
 * keys have to be unique vaules do not
* Allow us to pass all this information as one package which makes it easy to keep track of since we're just passing one variable. You'll see this become even more useful as we start integrating with servers and APIs.












**Use the Dot Notation. But if you’re dealing with invalid identifier or variables, use the Bracket notation.**

######Assignments with Dots

      var person = {};
        person.name = "Shannon";

            //OR

        var person = {
            "name" : "Shannon"

        };
* you do not have to use quotations around name
* Dot notation coerces to a string, use with characters that you can create a variable with ( like you can use a underscore but not a dash), 
* bracket notation does not
![Computer Architecture](img/dotrules.png)

        // Dot notation vs Bracket notation
        const variable = 'cookie';
        const snack = {
        cookie: '🍪'
        };
        // ✅ Dot: access property
        snack.cookie;
        // ✅ Bracket: access property with variable
        snack[variable];


######Access with Dot Notation
    var who = person.name // Shannon
    person.name = Reed
* person.name gets updated to Reed
* who remains the same
**This is called storing values by reference or by value**
* By default, just use the Dot notation.
    * It’s a lot easier to read
    * It’s way faster to type.
* only works with valid identifiers
***An identifier is a sequence of characters in the code that identifies a variable, function, or property.***
* The identifier has the following rules:
    * case sensitive
    * can contain Unicode letters
    * $, -, are allowed
    * Digits (0–9) are okay BUT may not start with a digit

            const obj = {
                123: 'digit',//SyntaxError
                123name': 'start with digit',// SyntaxError
                name123: 'does not start with digit',//
                $name: '$ sign',//
                name-123: 'hyphen',//SyntaxError
                NAME: 'upper case',//
                name: 'lower case'//
                };


######Accessing with Bracket Notation
    obj['123'];     // ✅ 'digit'
    obj['123name']; // ✅ 'start with digit'
    obj['name123']; // ✅ 'does not start with digit'
    obj['$name'];   // ✅ '$ sign'
    obj['name-123']; // ✅ 'does not start with digit'
    obj['NAME']; // ✅ 'upper case'
    obj['name']; // ✅ 'lower case'

*If you think you have an invalid JavaScript identifier as your property key, use the Bracket Notation*

######Accessing Property with Variables
* Another limitation of the Dot notation is working with variables. You definitely should use the Bracket Notation.
* When you’re referencing a variable in the Bracket Notation, you need to skip the quote.
* if I try to use the Dot notation on the variable, it returns `undefined`. This is because when you try to access a property that doesn’t exist, it will return `undefined`.

        const variable = 'name';
        const obj = {
        name: 'value'
        };
        // Bracket Notation
        obj[variable]; // ✅ 'value'
        // Dot Notation
        obj.variable; // undefined
*If you used the Dot notation, it will just assume you’re trying to access the property with a valid JavaScript identifier. Because it’s returning something, you might think everything is working fine. Under the hood, yes it is. But if your intention is to use the variable, it might throw you off. This definitely can be a source of a debugging headache.**

* Never use the Dot Notation when using a Variable
* **Pass by Value:** values get its own space in memory, makes a copy every time
* **Pass by Reference:** often shares the same place in memory, like  passing a pointer around, so when you move the pointer the reference changes, can affect your code



#####Array
    var person = [];
    person.name = "Shannon";
    var who = person.name
    person[0] = "Reed"
    typeof person === "array" //False
    typeof person === "objects" //True

* arrays is a special kind of objects, because we have properties and methods on them  
* arrays have .length property that is produced as you add numerical indices to an array
* we can sort and preform lopps easliy 


    