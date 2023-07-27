self.addEventListener("message", (event) => {
  if (event.data === "calculateSum") {
    let sum = 0;
    for (let i = 0; i < 9999999999; i++) {
      sum += i;
    }

    // Send the result back to the main thread
    self.postMessage(sum);
  }
});
