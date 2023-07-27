// document.write("working");

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      console.log("Cache hit!");
      return cache[key];
    } else {
      console.log("Cache miss!");
      const result = func.apply(args);
      cache[key] = result;
      return result;
    }
  };
}

// A simple recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoizedFactorial = memoize(factorial);

// Example calls
console.log(memoizedFactorial(5)); // The result will be computed and cached
console.log(memoizedFactorial(5)); // The result will be retrieved from the cache
console.log(memoizedFactorial(10)); // The result will be computed and cached
console.log(memoizedFactorial(10)); // The result will be retrieved from the cache
