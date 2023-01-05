import "../styles/style.css";
import { Movies } from "./Movies";
import { DOM } from "./DOM";

DOM.Horror.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes("horror")).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      `<div class="card epsilon ls-medium">
      <p>${Movies.name}</p>
      <p>${Movies.tomatoes}</p>
      <img class="image" src="${Movies.img}">
      </div>`
    )
  );
});

DOM.Comedy.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes("comedy")).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      `<div class="card epsilon ls-medium">
      <h1>${Movies.name}</h1>
      <h2>${Movies.tomatoes}</h2>
      <img class="image" src="${Movies.img}">
      </div>`
    )
  );
});

DOM.Action.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes("action")).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      `<div class="card epsilon ls-medium">
      <h1>${Movies.name}</h1>
      <h2>${Movies.tomatoes}</h2>
      <img class="image" src="${Movies.img}">
      </div>`
    )
  );
});
