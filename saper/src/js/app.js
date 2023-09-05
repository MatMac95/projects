const elements = document.querySelector("#elements");
let points = 0;
elements.addEventListener("click", (e) => {
  const elementPoints = e.target.closest("td").getAttribute("data-points");
  const elementBomb = e.target.closest("td").hasAttribute("data-is-bomb");

  e.target.classList.add("show");

  if (elementBomb) {
    document.querySelector("#points").innerHTML = "Game over";
  } else {
    points += Number(elementPoints);
    document.querySelector("#points").innerHTML = points;
  }
});
