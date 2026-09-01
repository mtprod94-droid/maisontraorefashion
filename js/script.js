/* =========================================================
   MAISON TRAORÉ FASHION
   MOBILE NAVIGATION SYSTEM
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const menuButton =
        document.querySelector(".menu-toggle");
    const navigation =
        document.querySelector(".main-navigation");
    const header =
        document.querySelector(".site-header");
    /* =====================================================
       SAFETY CHECK
       ===================================================== */
    if (!menuButton || !navigation) {
        return;
    }
    /* =====================================================
       MAIN MENU
       ===================================================== */
    const openMenu = () => {
        navigation.classList.add("open");
        menuButton.classList.add("active");
        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );
        menuButton.setAttribute(
            "aria-label",
            "Fermer le menu"
        );
        document.body.classList.add("menu-open");
    };
    const closeMenu = () => {
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
        document.body.classList.remove("menu-open");
        closeAllSubmenus();
    };
    const toggleMenu = () => {
        if (navigation.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    };
    menuButton.addEventListener(
        "click",
        toggleMenu
    );
    /* =====================================================
       COLLECTIONS — SECOND LEVEL MENU
       ===================================================== */
    const collectionsLink =
        [...navigation.querySelectorAll("a")]
            .find(
                (link) =>
                    link.textContent
                        .trim()
                        .toLowerCase() === "collections"
            );
    let collectionsWrapper = null;
    let collectionsSubmenu = null;
    if (collectionsLink) {
        /*
         * Create wrapper
         */
        collectionsWrapper =
            document.createElement("div");
        collectionsWrapper.className =
            "nav-submenu-wrapper";
        /*
         * Create button
         */
        const collectionsButton =
            document.createElement("button");
        collectionsButton.type = "button";
        collectionsButton.className =
            "nav-submenu-trigger";
        collectionsButton.setAttribute(
            "aria-expanded",
            "false"
        );
        collectionsButton.innerHTML = `
            <span>Collections</span>
            <span class="submenu-arrow">›</span>
        `;
        /*
         * Create submenu
         */
        collectionsSubmenu =
            document.createElement("div");
        collectionsSubmenu.className =
            "nav-submenu";
        collectionsSubmenu.setAttribute(
            "aria-hidden",
            "true"
        );
        /*
         * Submenu title / back button
         */
        const submenuHeader =
            document.createElement("div");
        submenuHeader.className =
            "nav-submenu-header";
        submenuHeader.innerHTML = `
            <button
                type="button"
                class="nav-submenu-back"
                aria-label="Retour"
            >
                <span>‹</span>
                <span>Collections</span>
            </button>
        `;
        /*
         * Catalogue link
         */
        const catalogueLink =
            document.createElement("a");
        catalogueLink.href =
            "collections.html";
        catalogueLink.className =
            "nav-submenu-link nav-submenu-main";
        catalogueLink.innerHTML = `
            <span>
                Voir le catalogue
            </span>
            <span>↗</span>
        `;
        /*
         * Hommes
         */
        const hommesLink =
            createSubmenuLink(
                "Hommes",
                "hommes.html",
                "01"
            );
        /*
         * Femmes
         */
        const femmesLink =
            createSubmenuLink(
                "Femmes",
                "femmes.html",
                "02"
            );
        /*
         * Enfants
         */
        const enfantsLink =
            createSubmenuLink(
                "Enfants",
                "enfants.html",
                "03"
            );
        /*
         * Événements
         */
        const evenementsLink =
            createSubmenuLink(
                "Événements",
                "evenements.html",
                "04"
            );
        /*
         * Assemble submenu
         */
        collectionsSubmenu.appendChild(
            submenuHeader
        );
        collectionsSubmenu.appendChild(
            catalogueLink
        );
        collectionsSubmenu.appendChild(
            hommesLink
        );
        collectionsSubmenu.appendChild(
            femmesLink
        );
        collectionsSubmenu.appendChild(
            enfantsLink
        );
        collectionsSubmenu.appendChild(
            evenementsLink
        );
        /*
         * Replace original Collections link
         */
        collectionsLink.replaceWith(
            collectionsWrapper
        );
        collectionsWrapper.appendChild(
            collectionsButton
        );
        collectionsWrapper.appendChild(
            collectionsSubmenu
        );
        /* =================================================
           OPEN COLLECTIONS SUBMENU
           ================================================= */
        collectionsButton.addEventListener(
            "click",
            () => {
                collectionsWrapper.classList.add(
                    "submenu-active"
                );
                collectionsButton.setAttribute(
                    "aria-expanded",
                    "true"
                );
                collectionsSubmenu.setAttribute(
                    "aria-hidden",
                    "false"
                );
            }
        );
        /* =================================================
           BACK TO MAIN MENU
           ================================================= */
        const backButton =
            submenuHeader.querySelector(
                ".nav-submenu-back"
            );
        backButton.addEventListener(
            "click",
            () => {
                collectionsWrapper.classList.remove(
                    "submenu-active"
                );
                collectionsButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
                collectionsSubmenu.setAttribute(
                    "aria-hidden",
                    "true"
                );
            }
        );
        /* =================================================
           CLOSE MENU AFTER CATEGORY SELECTION
           ================================================= */
        collectionsSubmenu
            .querySelectorAll("a")
            .forEach((link) => {
                link.addEventListener(
                    "click",
                    () => {
                        closeMenu();
                    }
                );
            });
    }
    /* =====================================================
       CREATE SUBMENU LINK
       ===================================================== */
    function createSubmenuLink(
        title,
        url,
        number
    ) {
        const link =
            document.createElement("a");
        link.href = url;
        link.className =
            "nav-submenu-link";
        link.innerHTML = `
            <span class="submenu-number">
                ${number}
            </span>
            <span class="submenu-title">
                ${title}
            </span>
            <span class="submenu-arrow-small">
                ↗
            </span>
        `;
        return link;
    }
    /* =====================================================
       CLOSE ALL SUBMENUS
       ===================================================== */
    function closeAllSubmenus() {
        if (!collectionsWrapper) {
            return;
        }
        collectionsWrapper.classList.remove(
            "submenu-active"
        );
        const button =
            collectionsWrapper.querySelector(
                ".nav-submenu-trigger"
            );
        const submenu =
            collectionsWrapper.querySelector(
                ".nav-submenu"
            );
        if (button) {
            button.setAttribute(
                "aria-expanded",
                "false"
            );
        }
        if (submenu) {
            submenu.setAttribute(
                "aria-hidden",
                "true"
            );
        }
    }
    /* =====================================================
       CLOSE NORMAL NAVIGATION LINKS
       ===================================================== */
    navigation
        .querySelectorAll(
            "a:not(.nav-submenu-link)"
        )
        .forEach((link) => {
            link.addEventListener(
                "click",
                () => {
                    closeMenu();
                }
            );
        });
    /* =====================================================
       ESCAPE KEY
       ===================================================== */
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Escape") {
                return;
            }
            if (
                collectionsWrapper &&
                collectionsWrapper.classList.contains(
                    "submenu-active"
                )
            ) {
                closeAllSubmenus();
                return;
            }
            if (
                navigation.classList.contains(
                    "open"
                )
            ) {
                closeMenu();
            }
        }
    );
    /* =====================================================
       CLICK OUTSIDE
       ===================================================== */
    document.addEventListener(
        "click",
        (event) => {
            if (
                !navigation.classList.contains(
                    "open"
                )
            ) {
                return;
            }
            if (
                navigation.contains(event.target) ||
                menuButton.contains(event.target)
            ) {
                return;
            }
            closeMenu();
        }
    );
    /* =====================================================
       SCROLL REVEAL
       ===================================================== */
    const revealElements =
        document.querySelectorAll(".reveal");
    if (revealElements.length) {
        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(
                        (entry) => {
                            if (
                                entry.isIntersecting
                            ) {
                                entry.target.classList.add(
                                    "is-visible"
                                );
                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                    threshold: 0.12
                }
            );
        revealElements.forEach(
            (element) => {
                revealObserver.observe(
                    element
                );
            }
        );
    }
    /* =====================================================
       HEADER SCROLL BEHAVIOR
       ===================================================== */
    let lastScrollY =
        window.scrollY;
    window.addEventListener(
        "scroll",
        () => {
            if (!header) {
                return;
            }
            const currentScrollY =
                window.scrollY;
            if (
                currentScrollY >
                    lastScrollY &&
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
            lastScrollY =
                currentScrollY;
        },
        {
            passive: true
        }
    );
});