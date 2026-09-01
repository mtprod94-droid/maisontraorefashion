/* =========================================================
   MAISON TRAORÉ FASHION
   MOBILE NAVIGATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");
    if (!menuButton || !navigation) {
        return;
    }
    /* =====================================================
       OPEN / CLOSE MAIN MENU
       ===================================================== */
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");
        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
        document.body.classList.toggle(
            "menu-open",
            isOpen
        );
    });
    /* =====================================================
       CLOSE MENU WHEN A NORMAL LINK IS CLICKED
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
            document.body.classList.remove(
                "menu-open"
            );
        });
    });
    /* =====================================================
       ESCAPE KEY
       ===================================================== */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navigation.classList.remove("open");
            menuButton.classList.remove("active");
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
            document.body.classList.remove(
                "menu-open"
            );
        }
    });
    /* =====================================================
       SCROLL REVEAL
       ===================================================== */
    const revealElements =
        document.querySelectorAll(".reveal");
    if (revealElements.length) {
        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(
                                "is-visible"
                            );
                            observer.unobserve(
                                entry.target
                            );
                        }
                    });
                },
                {
                    threshold: 0.12
                }
            );
        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    }
    /* =====================================================
       HEADER — HIDE ON SCROLL DOWN / SHOW ON SCROLL UP
       ===================================================== */
    let lastScrollY = window.scrollY;
    window.addEventListener(
        "scroll",
        () => {
            const currentScrollY =
                window.scrollY;
            const header =
                document.querySelector(".site-header");
            if (!header) {
                return;
            }
            if (
                currentScrollY > lastScrollY &&
                currentScrollY > 120
            ) {
                header.classList.add(
                    "header-hidden"
                );
            } else {
                header.classList.remove(
                    "header-hidden"
                );
            }
            lastScrollY = currentScrollY;
        },
        {
            passive: true
        }
    );
});