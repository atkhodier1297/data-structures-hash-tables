
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
