const body = document.body;
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const creationsContainer = document.querySelector(
  ".creations__cards-container"
);
let creationsList = [];
let windowWidth = window.innerWidth;

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  bodyLock();
});

window.addEventListener("resize", () => {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;

    loadCreations();

    if (windowWidth >= 1024) {
      nav.classList.remove("nav--active");
    }
  }
});

function bodyLock() {
  const isActive = nav.classList.contains("nav--active");

  isActive
    ? body.classList.add("scroll-lock")
    : body.classList.remove("scroll-lock");
}

const fetchCreations = async () => {
  const response = await fetch("js/creationsList.json");
  const data = await response.json();

  creationsList = data;

  loadCreations();
};

fetchCreations();

function loadCreations() {
  creationsContainer.innerHTML = "";

  creationsList.map((item) =>
    creationsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="creations__card">
            <img
              src=${windowWidth < 768 ? item.image.mobile : item.image.desktop}
              alt=${item.name}
              class="creations__image"
            />
            <h2 class="creations__name heading-text">${item.name}</h2>
        </div>
        `
    )
  );
}
