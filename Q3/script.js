// document.write("working");

document.querySelector("#container").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const itemId = e.target.textContent;
        console.log(`Clicked: ${itemId}`);
    
        // Open the link in a new tab
        window.open("/" + itemId, "_blank");
  }
});

// Function to add a new list item dynamically
function addNewItem(itemText) {
    const newItem = document.createElement("li");
    newItem.textContent = itemText;
    container.appendChild(newItem);
  }

  addNewItem("Charger");
  addNewItem("Electronics");