
  /* Write an ES2015 Version */
  function createInstructor(firstName, lastName) {
      return {
          firstName, 
          lastName
      }
  }


/* Write an ES2015 Version */
var favoriteNumber = 42;
var instructor = {
    firstName: "Colt", 
    [favoriteNumber]: "That is my favorite!"
} 


  /* Write an ES2015 Version */
  var instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //--------------------------------------------
  function createAnimal(species, verb, noise) {
      return {species,
             [verb]() {
          console.log(noise); 
      }
    }
  }