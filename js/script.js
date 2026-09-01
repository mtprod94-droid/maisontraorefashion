/* =========================================================
   MAISON TRAORÉ FASHION
   MAIN JAVASCRIPT
   MOBILE NAVIGATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");
    if (!menuButton || !navigation) {
        return;
    }
    /* =====================================================
       OPEN / CLOSE MENU
    ===================================================== */
    function toggleMenu() {
        const isOpen =
            navigation.classList.toggle("open");
        menuButton.classList.toggle(
            "active",
            isOpen
        );
        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
        );
        document.body.classList.toggle(
            "menu-open",
            isOpen
        );
    }
    menuButton.addEventListener(
        "click",
        toggleMenu
    );
    /* =====================================================
       CLOSE MENU WHEN LINK IS CLICKED
    ===================================================== */
    const navigationLinks =
        navigation.querySelectorAll("a");
    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.classList.remove("active");
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );
            document.body.classList.remove(
                "menu-open"
            );
        });
    });
    /* =====================================================
       CLOSE MENU WITH ESCAPE
    ===================================================== */
    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape" &&
                navigation.classList.contains("open")
            ) {
                navigation.classList.remove(
                    "open"
                );
                menuButton.classList.remove(
                    "active"
                );
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
                menuButton.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );
                document.body.classList.remove(
                    "menu-open"
                );
            }
        }
    );
    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */
    document.addEventListener(
        "click",
        (event) => {
            const clickedInsideMenu =
                navigation.contains(event.target);
            const clickedButton =
                menuButton.contains(event.target);
            if (
                navigation.classList.contains("open") &&
                !clickedInsideMenu &&
                !clickedButton
            ) {
                navigation.classList.remove(
                    "open"
                );
                menuButton.classList.remove(
                    "active"
                );
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
                menuButton.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );
                document.body.classList.remove(
                    "menu-open"
                );
            }
        }
    );
    /* =====================================================
       SCROLL REVEAL
    ===================================================== */
    const revealElements =
        document.querySelectorAll(
            ".intro-content, .section-heading, .collection-item, .atelier-content, .appointment-content"
        );
    if (
        "IntersectionObserver" in window &&
        revealElements.length
    ) {
        const observer =
            new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }
                        entry.target.classList.add(
                            "is-visible"
                        );
                        observer.unobserve(
                            entry.target
                        );
                    });
                },
                {
                    threshold: 0.12
                }
            );
        revealElements.forEach((element) => {
            element.classList.add(
                "reveal"
            );
            observer.observe(element);
        });
    }
    /* =====================================================
       CURRENT YEAR
    ===================================================== */
    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );
    yearElements.forEach((element) => {
        element.textContent =
            new Date().getFullYear();
    });
});
