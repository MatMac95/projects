const button = document.querySelector("#button");
const inputTask = document.querySelector("#inputTask");
const form = document.querySelector("#form");
const list = document.querySelector("#list");
let text = "";
inputTask.addEventListener("keyup", (event) => {
  text = event.target.value;
  if (text == "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

button.addEventListener("click", () => {
  const newTaskValue = `<li>${text}</li>`;
  console.log(list.innerHTML);
  list.innerHTML = list.innerHTML + newTaskValue;
  inputTask.value = "";
  button.disabled = true;
});

list.addEventListener("click", (event) => {
  if (event.target.classList == "linethrough") {
    event.target.classList.remove("linethrough");
  } else {
    event.target.classList.add("linethrough");
  }
});
