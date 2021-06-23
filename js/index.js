const body = document.body;
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const creationsContainer = document.querySelector(
  ".creations__cards-container"
);

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  bodyLock();
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

  loadCreations(data);
};

fetchCreations();

function loadCreations(list) {
  list.map((item) =>
    creationsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="creations__card">
            <img
              src=${item.image.mobile}
              alt=${item.name}
              class="creations__image"
            />
            <h2 class="creations__name heading-text">${item.name}</h2>
        </div>
        `
    )
  );
}
