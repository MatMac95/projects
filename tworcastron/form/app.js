const emailInput = document.querySelector("#email");
const button = document.querySelector("#send-button");
const validation = document.querySelector("#validation");
const form = document.querySelector("#form");
const succes = document.querySelector("#succes");

const checkEmail = (value) => {
  return value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
let email = "";
emailInput.addEventListener("keyup", (event) => {
  email = event.target.value;
  if (checkEmail(email)) {
    button.disabled = false;
    validation.innerHTML = "E-mail jest poprawny";
    validation.classList.add("green");
    validation.classList.remove("red");
  } else if (email == "") {
    validation.innerHTML = "";
  } else {
    button.disabled = true;
    validation.innerHTML = "E-mail jest niepoprawny";
    validation.classList.add("red");
    validation.classList.remove("green");
  }
});

button.addEventListener("click", () => {
  form.classList.add("hidden");
  succes.classList.remove("hidden");
});
