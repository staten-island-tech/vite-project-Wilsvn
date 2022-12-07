import "../styles/style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>`;

setupCounter(document.querySelector("#counter"));
