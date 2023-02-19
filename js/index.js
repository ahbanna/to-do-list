let count = 0;

document.getElementById("btn-add").addEventListener("click", function () {
  const userInput = document.getElementById("user-input");
  const userInputValue = userInput.value;
  console.log(userInputValue);

  const tableContent = document.getElementById("table-content");

  // for dynamic number
  count = count + 1;

  //create tr and td
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${count}</td>
  <td>${userInputValue}</td>
  <td>
  <button class="btn btn-danger btn-delete" id="">Delete</button>
  <button class="btn btn-success">Done</button>
  </td>
  `;

  // append tr
  tableContent.appendChild(tr);
// tr.classList.add('item') // if we want to add a class in tr

  //user input clear
  userInput.value = "";

  //delete button
  const deleteButton = document.querySelectorAll(".btn-delete");
  for (const btnValue of deleteButton) {
    btnValue.addEventListener("click", function (event) {
      const parentRow = event.target.parentNode.parentNode;
      parentRow.remove();
    });
  }
});

// clear all button
const clearButton = document.getElementById("btn-clear");
clearButton.addEventListener("click", function (event) {
  const allDelete = event.target.parentNode;
  allDelete.remove();
});
