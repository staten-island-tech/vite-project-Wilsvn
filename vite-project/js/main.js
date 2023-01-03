import "../styles/style.css";
import { Movies } from "./Movies";
import { DOM } from "./DOM";

DOM.Horror.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes(Horror)).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      '<div class="card"><h1>${Movies.name}</h1><h2>${Movies.tomatoes}</h2><img src="${Movie.img"></div>'
    )
  );
});

DOM.Comedy.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes(Comedy)).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      '<div class="card"><h1>${Movies.name}</h1><h2>${Movies.tomatoes}</h2><img src="${Movie.img"></div>'
    )
  );
});

DOM.Action.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes(Action)).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      '<div class="card"><h1>${Movies.name}</h1><h2>${Movies.tomatoes}</h2><img src="${Movie.img"></div>'
    )
  );
});
