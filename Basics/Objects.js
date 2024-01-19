//Declare an Object
let person1 = {
    name: "John",
    age: 30,
    isStudent: false,
};

// Create an Object
let person2 = new Object();
person2.name = "Smith";
person2.age = 25;
person2.isStudent = true;

//Accessing object properties
console.log(person1.name); // John
console.log(person1["age"]); // 30

//Adding or modifying properties
person1.gender = "Male"; // Adding a new property
person1.age = 31; // Modifying an existing property

//<-------------------------------------->

//Nested Objects
let address = {
    city: "New York",
    zipCode: "10001",
};

let person = {
    name: "John",
    age: 30,
    address: address,
};

//Add functions to properties
let calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2

//Coversion of Object from and to JSON
let personJSON = JSON.stringify(person); // Convert object to JSON string
let personObject = JSON.parse(personJSON); // Convert JSON string to object


person1.keys()    //when you want an array of property names.
person1.values()  //when you want an array of property values.
person1.entries() //when you want an array of key-value pairs