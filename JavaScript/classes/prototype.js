/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Characters.  
  At the bottom of this file are 3 objects that all end up inheriting from Characters.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Character ===
  * side
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Character
  * Instances of Character should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const jedi = new Character({
    dimensions: {
      height: 172,
	  mass: 77
    },
    healthPoints: 5,
    name: 'Luke Skywalker',
    team: 'Light Side',
    weapons: [
      'Light Saber',
    ],
    language: 'Common Tongue',
  });
  const sith = new Character({
    dimensions: {
      height: 202,
	  mass: 136
    },
    healthPoints: 5,
    name: 'Darth Vader',
    team: 'Dark Side',
    weapons: [
      'Light Saber',
      'Force Choke',
    ],
    language: 'Common Tongue',
  });
  const robot = new Character({
    dimensions: {
      height: 167,
	  mass: 75
    },
    healthPoints: 5,
    name: 'C-3PO',
    team: 'Light Side',
    weapons: [
      'Staying out of the way',
    ],
    language: 'Common Tongue',
  });
  
  
  console.log(sith.dimensions); 
  console.log(robot.healthPoints); 
  console.log(jedi.name); 
  console.log(robot.team); 
  console.log(jedi.weapons); 
  console.log(sith.language); 
  console.log(sith.greet()); 
  console.log(jedi.takeDamage()); 
  console.log(robot.destroy()); 
*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!