gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Animation = function () {};

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const menuItems = document.querySelectorAll(".nav__item");

Animation.prototype.init = function () {
    if (windowWidth >= 768) {
        ScrollSmoother.create({
            smooth: 2,
            effects: true,
            normalizeScroll: true,
        });
    }

    if (windowWidth < 1024) {
        Animation.prototype.mobileMenu();
    } else {
        Animation.prototype.desktopMenu();
    }

    Animation.prototype.hero();
    Animation.prototype.grid();
    Animation.prototype.transitions();
};

Animation.prototype.hero = function () {
    const heroImage = document.querySelector(".hero__image");
    gsap.to(heroImage, {
        y: 0,
        scrollTrigger: {
            trigger: heroImage,
            start: "top top",
            pin: true,
        },
    });
};

Animation.prototype.grid = function () {
    const cards = document.querySelectorAll(".creations__card");

    gsap.set(cards, {
        opacity: 0,
        y: 30,
    });

    ScrollTrigger.batch(cards, {
        batchMax: 4,
        start: "top 80%",
        onEnter: (batch) => {
            gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.04 });
        },
    });
};

Animation.prototype.transitions = function () {
    animatedTyping();
    animatedFade();
    animatedFadeStagger();
    animatedLeft();
    animatedLeftStagger();
    animatedRight();
    animatedBottom();
    animatedBottomStagger();

    function animatedTyping() {
        const elementsWithTypingEffect =
            document.querySelectorAll(".animated-typing");
        elementsWithTypingEffect.forEach((el) => {
            const splitText = new SplitText(el, {
                charsClass: "animated-letter++",
            }).chars;
            gsap.from(splitText, {
                autoAlpha: 0,
                y: 20,
                stagger: 0.03,
                duration: 0.4,
                scrollTrigger: { trigger: el, start: "top 85%" },
            });
        });
    }

    function animatedFadeStagger() {
        const wrapper = gsap.utils.toArray(".animated-fade-stagger");
        if (wrapper.length) {
            wrapper.forEach((wrap) => {
                const children = [...wrap.children];
                gsap.from(children, {
                    autoAlpha: 0,
                    stagger: 0.04,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: wrap,
                        start: "top 100%",
                    },
                });
            });
        }
    }

    function animatedFade() {
        const fadedElements = gsap.utils.toArray(".animated-fade");
        if (fadedElements.length) {
            fadedElements.forEach((el) => {
                gsap.from(el, {
                    autoAlpha: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 100%",
                    },
                });
            });
        }
    }

    function animatedLeft() {
        const elements = gsap.utils.toArray(".animated-left");
        if (elements.length) {
            elements.forEach((el) => {
                gsap.from(el, {
                    x: 50,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                });
            });
        }
    }

    function animatedLeftStagger() {
        const wrapper = gsap.utils.toArray(".animated-left-stagger");
        if (wrapper.length) {
            wrapper.forEach((wrap) => {
                const children = [...wrap.children];
                gsap.from(children, {
                    autoAlpha: 0,
                    x: 30,
                    stagger: 0.04,
                    scrollTrigger: {
                        trigger: wrap,
                        start: "top 80%",
                    },
                });
            });
        }
    }

    function animatedRight() {
        const elements = gsap.utils.toArray(".animated-right");
        if (elements.length) {
            elements.forEach((el) => {
                gsap.from(el, {
                    x: -40,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                });
            });
        }
    }

    function animatedBottom() {
        const elements = gsap.utils.toArray(".animated-bottom");
        if (elements.length) {
            elements.forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                });
            });
        }
    }

    function animatedBottomStagger() {
        const wrapper = gsap.utils.toArray(".animated-bottom-stagger");
        if (wrapper.length) {
            wrapper.forEach((wrap) => {
                const children = [...wrap.children];
                gsap.from(children, {
                    autoAlpha: 0,
                    y: 40,
                    stagger: 0.05,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: wrap,
                        start: "top 85%",
                    },
                });
            });
        }
    }
};

Animation.prototype.mobileMenu = function () {
    gsap.set(menuItems, { x: 30 });

    const tl = gsap.timeline({ paused: true });
    tl.to(menu, {
        autoAlpha: 1,
        duration: 0.2,
        backgroundColor: "#000",
    }).to(menuItems, {
        x: 0,
        autoAlpha: 1,
        stagger: 0.05,
    });

    navToggle.addEventListener("click", function () {
        if (nav.classList.contains("nav--active")) {
            tl.reverse();
            body.classList.remove("scroll-lock");
        } else {
            tl.play();
            body.classList.add("scroll-lock");
        }

        nav.classList.toggle("nav--active");
    });
};

Animation.prototype.desktopMenu = function () {
    gsap.to(menuItems, {
        x: 0,
        autoAlpha: 1,
        stagger: 0.05,
        delay: 0.2,
    });
};

document.addEventListener("DOMContentLoaded", function () {
    Animation.prototype.init();
});
