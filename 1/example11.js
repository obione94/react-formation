console.clear();

function add(...numbers) { // REST
  console.log(numbers);
  
  return numbers.reduce((acc, n) => n + acc, 0);
}

const s1 = add(1, 2); // [1, 2]
const s2 = add(1, 2, 3, 4); // [1, 2, 3, 4]
const s3 = add(1, 2, 3, 4, 5, 6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(s1, s2, s3);

// SPREAD
const arr1 = [1, 2];
const arr2 = [3, 4];
//const arr3 = [arr1, arr2];
//console.log(arr3); // [[1, 2], [3, 4]]
const arr3 = [...arr1, ...arr2];
console.log(arr3);  // [1, 2, 3, 4]

const arr1Clone = [...arr1];

const obj1 = {
  a: 1,
  b: 2
}

const obj2 = {
  c: 3,
  d: 4,
  a: 42
}

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);