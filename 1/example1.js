// Portée globale - Mauvaise pratique !
var maVariable = 42;
console.log(maVariable); // 42

// Portée locale
const maVariable2 = 42;
let maVariable3 = 42;

console.log(maVariable3);
// maVariable2 = 33; // Interdit !

maVariable3 = 33;
console.log(maVariable3);

const myUser = {
  firstname: 'Mazen',
  lastname: 'Toto',
  age: 42
}

myUser.age++ // Pas d'erreur

console.log(myUser);