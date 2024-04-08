console.clear();

// Objets en JavaScript
const user = {
  firstname: 'Mazen',
  lastname: 'Dupond',
  porteFeuille: {
    porteCarte: {
      carteBleue: true
    }
  },
  sePresenter() { // <=> sePresenter: functon() {
    console.log("Bonjour, je m'appelle " + this.firstname);
  }
}

console.log(user.firstname); // Mazen
console.log(user.porteFeuille.porteCarte.carteBleue); // true

user.age = 42;
user.firstname = 'Jean';
delete user.lastname;

user.sePresenter();

for(let k in user) {
  console.log(k);
  console.log(user[k]);
}
