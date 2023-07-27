// document.write("working");

// The target object to be proxied
const targetObject = {
    name: "John",
    age: 30,
  };
  
  // The handler object containing trap methods
  const handler = {
    // Trap method for getting properties
    get: function (target, property) {
      console.log(`Getting property "${property}"`);
      return target[property];
    },
  
    // Trap method for setting properties
    set: function (target, property, value) {
      console.log(`Setting property "${property}" to "${value}"`);
      target[property] = value;
      return true; // Indicate the operation was successful
    },
  
    // Trap method for checking property existence
    has: function (target, property) {
      console.log(`Checking if property "${property}" exists`);
      return property in target;
    },
  };
  
  // Create a Proxy using the target object and handler
  const proxyObject = new Proxy(targetObject, handler);
  
  // Interact with the proxy
  console.log(proxyObject.name); // Getting property "name" // Output: "John"
  proxyObject.age = 35; // Setting property "age" to "35"
  console.log(proxyObject.age); // Getting property "age" // Output: 35
  console.log("name" in proxyObject); // Checking if property "name" exists // Output: true
  console.log("email" in proxyObject); // Checking if property "email" exists // Output: false
  