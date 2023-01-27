let noOfItems = 0;

// add item handler
function addItem() {
  const message = document.querySelector(".message");
  const inputValue = document.getElementById("Input").value;
  const itemName = document.createTextNode(inputValue);
  const empty = document.querySelector(".empty");
  const li = document.createElement("li");
  const close = document.getElementsByClassName("close");
  const el = document.createElement("SPAN");
  const x = document.createTextNode("\u00D7");

  li.className = "list-group-item item";
  li.appendChild(itemName);
  if (inputValue === "") {
    message.textContent = "You must type a name for the item!";
  } else {
    message.textContent = "";
    empty.textContent = "";
    noOfItems++;
    document.getElementById("List").appendChild(li);
  }
  document.getElementById("Input").value = "";

  // add close button
  el.className = "close";
  el.appendChild(x);
  li.appendChild(el);

  // close button handler
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const listItem = this.parentElement;
      listItem.remove();
      noOfItems--;

      // check if list has items
      if (noOfItems === 0) {
        empty.textContent = "Your list is empty.";
      }
    };
  }
}

// checked item handler
const mainList = document.getElementById("List");
mainList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
