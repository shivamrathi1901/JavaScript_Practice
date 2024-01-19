// Declaration and initialization
let numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log("Element at index 2:", numbers[2]);

// Updating elements
numbers[2] = 10;
console.log("Updated element at index 2:", numbers[2]);

numbers.push(6);    //Inserts at the end of the array
numbers.unshift(0); //Inserts at the beginning of array
numbers.pop();      //Delete from end of array
numbers.shift();    //Delete from beginning of array

// Using map to double each element
let doubledNumbers = numbers.map(num => num * 2);
console.log("Map - Doubled Numbers:", doubledNumbers);

// Using filter to get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filter - Even Numbers:", evenNumbers);

// Using concat to concatenate arrays
let moreNumbers = [6, 7, 8];
let combinedNumbers = numbers.concat(moreNumbers);
console.log("Concat - Combined Numbers:", combinedNumbers);

// Using slice to get a portion of the array
let slicedNumbers = numbers.slice(1, 4);
console.log("Slice - Sliced Numbers:", slicedNumbers);

// Using splice to remove elements from the array
let removedElements = numbers.splice(2, 2);
console.log("Splice - Removed Elements:", removedElements);
console.log("Original Array after Splice:", numbers);

// Insertion at a specific index
// (Requires Array.splice to insert and shift elements)
numbers.splice(2, 0, 7);
console.log("Insertion of element 7:", numbers);

// Deletion from a specific index
// (Requires Array.splice to remove and shift elements)
numbers.splice(2, 1);

console.log("Array after operations:", numbers);
