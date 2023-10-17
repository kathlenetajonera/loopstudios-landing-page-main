const App = function () {};

let windowWidth = window.innerWidth;
let resizeTimer;

const body = document.body;
const creationsContainer = document.querySelector(
    ".creations__cards-container"
);

App.prototype.init = function () {
    App.prototype.grid();
    App.prototype.listeners();
};

App.prototype.grid = function () {
    loadCreations();

    function loadCreations() {
        creationsContainer.innerHTML = "";

        creationsList.map(function (item) {
            createCard(item);
        });
    }

    function createCard(item) {
        const isMobile = windowWidth < 768;
        const { name } = item;
        const { mobile, desktop } = item.image;

        creationsContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="creations__card">
                <img
                  class="creations__image"
                  alt="${name}"
                  src="${isMobile ? mobile : desktop}"
                  data-mobile="${mobile}"
                  data-desktop="${desktop}"
                >
                <h2 class="creations__name heading-text">
                  ${name}
                </h2>
            </div>`
        );
    }
};

App.prototype.listeners = function () {
    changeImageSource(windowWidth < 768);

    window.addEventListener("resize", function () {
        if (windowWidth !== window.innerWidth) {
            windowWidth = window.innerWidth;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                window.location.reload();
            }, 250);

            if (windowWidth >= 1024) {
                nav.classList.remove("nav--active");
                body.classList.remove("scroll-lock");
            }
        }
    });

    function changeImageSource(isMobile) {
        const hero = document.querySelector(".hero__image img");
        const cards = document.querySelectorAll(".creations__image");

        const changeSrc = (item) => {
            item.setAttribute(
                "src",
                isMobile
                    ? item.getAttribute("data-mobile")
                    : item.getAttribute("data-desktop")
            );
        };

        changeSrc(hero);
        cards.forEach((card) => changeSrc(card));
    }
};

document.addEventListener("DOMContentLoaded", function () {
    App.prototype.init();
});

//===== DATA =====//
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
