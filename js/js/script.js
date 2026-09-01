document.addEventListener(“DOMContentLoaded”, () => {

/* =========================================
   MOBILE NAVIGATION
========================================= */
const navigation = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-button");
const closeButtons = document.querySelectorAll(".menu-close");
const nextButtons = document.querySelectorAll(".menu-next");
const backButtons = document.querySelectorAll(".menu-back");
const panels = document.querySelectorAll(".menu-panel");
if (navigation && menuButton) {
    /* Open main menu */
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("menu-open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    /* Close buttons */
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            closeMenu();
        });
    });
    /* Open submenu */
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;
            if (!target) return;
            openPanel(target);
        });
    });
    /* Back buttons */
    backButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.back;
            if (!target) return;
            openPanel(target);
        });
    });
    /* Close menu after clicking normal links */
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
    /* Close with ESC */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
    /* Functions */
    function openMenu() {
        navigation.classList.add("menu-open");
        menuButton.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-is-open");
        resetPanels();
    }
    function closeMenu() {
        navigation.classList.remove("menu-open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-is-open");
        resetPanels();
    }
    function openPanel(panelName) {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
        const targetPanel = navigation.querySelector(
            `.menu-panel[data-panel="${panelName}"]`
        );
        if (targetPanel) {
            targetPanel.classList.add("active");
        }
    }
    function resetPanels() {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
        const mainPanel = navigation.querySelector(
            '.menu-panel[data-panel="main"]'
        );
        if (mainPanel) {
            mainPanel.classList.add("active");
        }
    }
}
/* =========================================
   HEADER SCROLL EFFECT
========================================= */
const header = document.querySelector(".header");
if (header) {
    const updateHeader = () => {
        if (window.scrollY > 40) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    };
    window.addEventListener("scroll", updateHeader, {
        passive: true
    });
    updateHeader();
}
/* =========================================
   SCROLL REVEAL
========================================= */
const revealElements = document.querySelectorAll(
    ".intro-content, " +
    ".section-heading, " +
    ".collection-card, " +
    ".atelier-content, " +
    ".sur-mesure-content, " +
    ".appointment-inner, " +
    ".contact"
);
if ("IntersectionObserver" in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );
    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}
/* =========================================
   REDUCED MOTION
========================================= */
const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);
if (reducedMotion.matches) {
    document.documentElement.classList.add(
        "reduce-motion"
    );
}
/* =========================================
   FOOTER YEAR
========================================= */
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

});