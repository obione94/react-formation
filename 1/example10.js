// getData() fait un appel au backend
function getData() {
    return {
      firstname: 'Toto',
      lastname: 'Dupond',
      age: 42,
      email: 'toto@toto.fr'
    }
  }
  
  const { age, email, firstname, lastname } = getData()
  
  console.log(firstname, lastname, age, email);