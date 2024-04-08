/*
let a = 1; // Variable primitive (string / bool / number)
let b = a // Passage par copie

b = 42

console.log(a); // 1
*/

const a = [1, 2]; // Variable complexe (objet)

// const b = a; // Passage par référence

// Cloner a
// const b = Object.assign([], a);
const b = [...a];

b[0] = 42

console.log(a[0]);