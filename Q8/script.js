const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

sumButton.addEventListener("click", (event) => {
  const worker = new Worker("worker.js");
  
  // Set up a message event listener to receive data from the worker
  worker.addEventListener("message", (event) => {
    const sum = event.data;
    alert("The Sum is " + sum);
  });
  
  // Send a message to the worker to start calculating the sum
  worker.postMessage("calculateSum");
});


bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green")
  document.body.style.background = "green";
  else document.body.style.background = "blue";
});
