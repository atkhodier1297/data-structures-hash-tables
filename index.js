
// In JavaScript, a hash table (also known as an associative array, dictionary, or object) 
// is a data structure that allows you to store key-value pairs. 
// It provides a way to associate values (the "values") with unique keys (the "keys"), which makes it efficient to retrieve and update values based on their keys. 
// Hash tables are a fundamental data structure in many programming languages, including JavaScript.
// In JavaScript, you can create a hash table using objects. Here's an example of how to create and use a hash table in JavaScript:

// Creating a hash table (object)
const carPrices = {
    "Toyota": 25000,
    "Honda": 22000,
    "Ford": 27000,
  };
  
  // Accessing values using keys
  console.log(carPrices["Toyota"]); // Output: 25000
  console.log(carPrices["Honda"]);  // Output: 22000
  
  // Adding a new key-value pair
  carPrices["Chevrolet"] = 28000;
  
  // Modifying an existing value
  carPrices["Toyota"] = 26000;
  
  // Deleting a key-value pair
  delete carPrices["Ford"];
  
  // Checking if a key exists in the hash table
  if ("Chevrolet" in carPrices) {
    console.log("Chevrolet is in the hash table.");
  } else {
    console.log("Chevrolet is not in the hash table.");
  }
  
  // Iterating over keys in the hash table
  for (const key in carPrices) {
    console.log(`${key}: ${carPrices[key]}`);
  }
  
  // Getting the number of key-value pairs in the hash table
  const numberOfCars = Object.keys(carPrices).length;
  console.log(`Number of cars in the hash table: ${numberOfCars}`);

// In this example, carPrices is a hash table where car makes are used as keys, and their corresponding prices are the values. 
// You can perform various operations on the hash table, such as adding, modifying, and deleting key-value pairs, as well as iterating over the keys and values.

// Keep in mind that in JavaScript, object keys are always converted to strings. 
// This can lead to unexpected behavior if you use non-string keys, as they will be automatically converted to strings. If you need to use non-string keys, you may consider using a Map data structure instead, which allows for any data type as keys.

// Hash Maps have super fast data access
// Data is accessed one way through the input
// Having the generated code without knowing the input gives you no access to that data
// This is called IDEMPOTENT 
// A function given an input always outputs the same thing
// In JS objects are Hash Maps
// Key Value Pairs
// Unlike arrays where you have ordered indexes
// With HM all you have to do is give it a key to get that data.
// Arrays are great for push and pop, but require more work to shift and unshift data.
// You do not want the hash function to take a long time to get and retrieve properties.
// That will slow things down
// We have a key then hash function hashes it very fast and then it stores in a memory address.
// Typically a time complexity of O(1) INSERT LOOKUP DELETE SEARCH

let user = {
  age: 54,
  name: 'Adam',
  magic: true,
  scream: function() {
    console.log("ahhhhhhh")
  }
}
 // All placed in memory at different addresses.

 user.age // O(1)
 user.spell = "abra cadabra" // O(1)
 user.scream // O(1)

 // Hash collisions in memory
 // With enough data and limited memory you will eventually have a collision
 // This actually stores two KV at the same memory address
 // Creates a Linked List which is a future data structure
 // Collisions slow down hash functions A LOT
 // Collisions create O(n)

 const a = new Map()
 // allows you tp save any data type as key
 // you can now have any data type for key and value in JS
 // functions strings int all can be keys and values now
 // hash maps insert data in random memory places
 // there is no order like there is in arrays
 // But now Map allows you to maintain order in a hash table

 const b = new Sets()
// allows you to store the keys with no values
// every lang has hash table DS they're all just called different things
// hash maps are called dictionaries in Python

// Let's build a Hash Map from scratch in JS
// Not needed in an interview

class HashTable {
  constructor(size) {
    this.data = newArray(size)
    [['grapes', 100]]
  }
// your hash function
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt((i) * i) % 
      this.data.length
    }
    return hash
  }
}

// allocating memory
const myHashTable = newHashTable(50)
// sets first key value to first memory channel
myHashTable.set('grapes', 1000)
// gets value by looking up key O(1)
myHashTable.get("grapes")

