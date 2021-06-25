const body = document.body;
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const creationsContainer = document.querySelector(
  ".creations__cards-container"
);
const creationsList = [
  {
    name: "Deep Earth",
    image: {
      mobile: "images/mobile/image-deep-earth.jpg",
      desktop: "images/desktop/image-deep-earth.jpg",
    },
  },
  {
    name: "Night Arcade",
    image: {
      mobile: "images/mobile/image-night-arcade.jpg",
      desktop: "images/desktop/image-night-arcade.jpg",
    },
  },
  {
    name: "Soccer Team VR",
    image: {
      mobile: "images/mobile/image-soccer-team.jpg",
      desktop: "images/desktop/image-soccer-team.jpg",
    },
  },
  {
    name: "The Grid",
    image: {
      mobile: "images/mobile/image-grid.jpg",
      desktop: "images/desktop/image-grid.jpg",
    },
  },
  {
    name: "From Up Above VR",
    image: {
      mobile: "images/mobile/image-from-above.jpg",
      desktop: "images/desktop/image-from-above.jpg",
    },
  },
  {
    name: "Pocket Borealis",
    image: {
      mobile: "images/mobile/image-pocket-borealis.jpg",
      desktop: "images/desktop/image-pocket-borealis.jpg",
    },
  },
  {
    name: "The Curiosity",
    image: {
      mobile: "images/mobile/image-curiosity.jpg",
      desktop: "images/desktop/image-curiosity.jpg",
    },
  },
  {
    name: "Make It Fisheye",
    image: {
      mobile: "images/mobile/image-fisheye.jpg",
      desktop: "images/desktop/image-fisheye.jpg",
    },
  },
];

let windowWidth = window.innerWidth;

loadCreations();

navToggle.addEventListener("click", function () {
  nav.classList.toggle("nav--active");
  bodyLock();
});

window.addEventListener("resize", function () {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;

    loadCreations();

    if (windowWidth >= 1024) {
      nav.classList.remove("nav--active");
      body.classList.remove("scroll-lock");
    }
  }
});

function bodyLock() {
  const isActive = nav.classList.contains("nav--active");

  isActive
    ? body.classList.add("scroll-lock")
    : body.classList.remove("scroll-lock");
}

function loadCreations() {
  creationsContainer.innerHTML = "";

  creationsList.map(function (item) {
    createCard(item);
  });

  function createCard(item) {
    if (windowWidth < 768) {
      creationsContainer.insertAdjacentHTML(
        "beforeend",
        '<div class="creations__card">\n<img class="creations__image" alt="' +
          item.name +
          '"src=' +
          item.image.mobile +
          '><h2 class="creations__name heading-text">' +
          item.name +
          "</h2>\n</div>"
      );
    } else {
      creationsContainer.insertAdjacentHTML(
        "beforeend",
        '<div class="creations__card">\n<img class="creations__image" alt="' +
          item.name +
          '"src=' +
          item.image.desktop +
          '><h2 class="creations__name heading-text">' +
          item.name +
          "</h2>\n</div>"
      );
    }
  }
}
