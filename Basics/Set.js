// Difference Between Sets and Arrays
// 1. Array can contain duplicate values whereas Sets cannot. 
// 2. Insertion order is maintained in arrays but not in Sets. 
// 3. Searching and deleting are faster in Sets. 

//Creating a Set
let uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); // Duplicate values are ignored in a Set
console.log(uniqueNumbers); // Set { 1, 2, 3 }

//Checking the size of the Set
console.log(uniqueNumbers.size); // 3

//Initializing Set with values
let colors = new Set(['red', 'green', 'blue']);
console.log(colors); // Set { 'red', 'green', 'blue' }

//Checking if value exists
console.log(uniqueNumbers.has(2)); // true
console.log(uniqueNumbers.has(4)); // false

//Deleting element from Set
uniqueNumbers.delete(2);
console.log(uniqueNumbers); // Set { 1, 3 }

//Iterating over Sets
uniqueNumbers.forEach(number => {
    console.log(number);
});
// Output:
// 1
// 3

for (let number of uniqueNumbers) {
    console.log(number);
}
// Output:
// 1
// 3

//Converting Set to Array
let uniqueNumbersArray = [...uniqueNumbers];
console.log(uniqueNumbersArray); // [1, 3]

let colorsArray = Array.from(colors);
console.log(colorsArray); // ['red', 'green', 'blue']

//Clearing the Set
uniqueNumbers.clear();
console.log(uniqueNumbers); // Set {}
