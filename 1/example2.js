// Tableaux en JavaScript

const notes = [ 14, 9, 8, 7 , 15, 6 ];

console.log(notes[0]);
console.log(notes[-1]); // undefined

notes[0] = 15
console.log(notes); // [15, 9, 8, 7, 15, 6]

// Ajouter une nouvelle note
notes.push(7); // Ajoute 7 à la fin
notes.unshift(4); // Ajoute 4 au début
console.log(notes); // [4, 15, 9, 8, 7, 15, 6, 7]

notes.splice(2, 1); // Retirer 1 élément à partir de l'index 2
console.log(notes); // [4, 15, 8, 7, 15, 6, 7]


// Itérer dans le tableau
for(let i = 0; i < notes.length; i++) {
  console.log(notes[i])
}

notes.forEach(function(note) {
  console.log(note);
});

for(let note of notes) {
  console.log(note);
}

console.log('-------------------------')
console.log('')
console.log('')

/* MAP */
// [4, 15, 8, 7, 15, 6, 7]
const newNotesHarmonisees = notes.map(function(note) {
  const valueToIncrement = Math.round(Math.random() * 2) + 1
  return note + valueToIncrement;
});

// [6, 17, 10, 10, 17, 7, 9]
console.log(newNotesHarmonisees);
console.log(notes); // [4, 15, 8, 7, 15, 6, 7]


/* FILTER */
const bonnesNotes = notes.filter(function(note) {
  return note >= 10
})
console.log(bonnesNotes); // [15, 15]