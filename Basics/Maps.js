//Creating a Map
let personMap = new Map();

// Adding key-value pairs
personMap.set('name', 'John');
personMap.set('age', 30);
personMap.set('isStudent', false);

console.log(personMap);
// Map { 'name' => 'John', 'age' => 30, 'isStudent' => false }

//Initializing a Map with Values
let colorsMap = new Map([
    ['red', '#FF0000'],
    ['green', '#00FF00'],
    ['blue', '#0000FF']
]);

console.log(colorsMap);
// Map { 'red' => '#FF0000', 'green' => '#00FF00', 'blue' => '#0000FF' }

//Checking Map Size
console.log(personMap.size); // 3

//Retrieving Values
console.log(personMap.get('name')); // John
console.log(personMap.get('isStudent')); // false

//Checking if a key exists
console.log(personMap.has('age')); // true
console.log(personMap.has('gender')); // false

//Deleting key-value pair
personMap.delete('isStudent');
console.log(personMap);
// Map { 'name' => 'John', 'age' => 30 }

//Iterating over Map entries
personMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30

for (let [key, value] of personMap) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: John
// age: 30

//Clearing the Map
personMap.clear();
console.log(personMap); // Map {}

