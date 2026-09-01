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
    if (!menuButton || !navigation) {
        return;
    }
    /* =====================================================
       MAIN MENU
       ===================================================== */
    function openMenu() {
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
        document.body.classList.add(
            "menu-open"
        );
    }
    function closeMenu() {
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
        closeAllSubmenus();
    }
    menuButton.addEventListener(
        "click",
        () => {
            if (
                navigation.classList.contains(
                    "open"
                )
            ) {
                closeMenu();
            } else {
                openMenu();
            }
        }
    );
    /* =====================================================
       CREATE SIMPLE LINK
       ===================================================== */
    function createLink(
        title,
        url,
        number = ""
    ) {
        const link =
            document.createElement("a");
        link.href = url;
        link.className =
            "nav-submenu-link";
        link.innerHTML = `
            ${
                number
                ? `
                    <span class="submenu-number">
                        ${number}
                    </span>
                `
                : ""
            }
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
       CREATE CATEGORY WITH THIRD LEVEL
       ===================================================== */
    function createCategory(
        title,
        categories
    ) {
        const wrapper =
            document.createElement("div");
        wrapper.className =
            "nav-category-wrapper";
        /* -----------------------------------------------
           CATEGORY BUTTON
        ------------------------------------------------ */
        const trigger =
            document.createElement("button");
        trigger.type = "button";
        trigger.className =
            "nav-category-trigger";
        trigger.setAttribute(
            "aria-expanded",
            "false"
        );
        trigger.innerHTML = `
            <span>
                ${title}
            </span>
            <span class="category-arrow">
                ›
            </span>
        `;
        /* -----------------------------------------------
           THIRD LEVEL
        ------------------------------------------------ */
        const submenu =
            document.createElement("div");
        submenu.className =
            "nav-category-submenu";
        submenu.setAttribute(
            "aria-hidden",
            "true"
        );
        /* -----------------------------------------------
           BACK BUTTON
        ------------------------------------------------ */
        const submenuHeader =
            document.createElement("div");
        submenuHeader.className =
            "nav-category-header";
        const backButton =
            document.createElement("button");
        backButton.type = "button";
        backButton.className =
            "nav-category-back";
        backButton.innerHTML = `
            <span>‹</span>
            <span>
                ${title}
            </span>
        `;
        submenuHeader.appendChild(
            backButton
        );
        submenu.appendChild(
            submenuHeader
        );
        /* -----------------------------------------------
           CATEGORY ITEMS
        ------------------------------------------------ */
        categories.forEach(
            (category, index) => {
                const link =
                    createLink(
                        category.title,
                        category.url,
                        String(index + 1)
                            .padStart(2, "0")
                    );
                submenu.appendChild(
                    link
                );
            }
        );
        /* -----------------------------------------------
           ASSEMBLE
        ------------------------------------------------ */
        wrapper.appendChild(
            trigger
        );
        wrapper.appendChild(
            submenu
        );
        /* -----------------------------------------------
           OPEN THIRD LEVEL
        ------------------------------------------------ */
        trigger.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                wrapper.classList.add(
                    "category-active"
                );
                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );
                submenu.setAttribute(
                    "aria-hidden",
                    "false"
                );
            }
        );
        /* -----------------------------------------------
           BACK
        ------------------------------------------------ */
        backButton.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                wrapper.classList.remove(
                    "category-active"
                );
                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );
                submenu.setAttribute(
                    "aria-hidden",
                    "true"
                );
            }
        );
        /* -----------------------------------------------
           CLOSE AFTER CATEGORY LINK
        ------------------------------------------------ */
        submenu
            .querySelectorAll("a")
            .forEach((link) => {
                link.addEventListener(
                    "click",
                    () => {
                        closeMenu();
                    }
                );
            });
        return wrapper;
    }
    /* =====================================================
       COLLECTIONS
       ===================================================== */
    const collectionsLink =
        [...navigation.querySelectorAll("a")]
            .find(
                (link) =>
                    link.textContent
                        .trim()
                        .toLowerCase() ===
                    "collections"
            );
    let collectionsWrapper =
        null;
    if (collectionsLink) {
        collectionsWrapper =
            document.createElement("div");
        collectionsWrapper.className =
            "nav-submenu-wrapper";
        /* -----------------------------------------------
           COLLECTIONS BUTTON
        ------------------------------------------------ */
        const collectionsTrigger =
            document.createElement("button");
        collectionsTrigger.type =
            "button";
        collectionsTrigger.className =
            "nav-submenu-trigger";
        collectionsTrigger.setAttribute(
            "aria-expanded",
            "false"
        );
        collectionsTrigger.innerHTML = `
            <span>
                Collections
            </span>
            <span class="submenu-arrow">
                ›
            </span>
        `;
        /* -----------------------------------------------
           COLLECTIONS SUBMENU
        ------------------------------------------------ */
        const collectionsSubmenu =
            document.createElement("div");
        collectionsSubmenu.className =
            "nav-submenu";
        collectionsSubmenu.setAttribute(
            "aria-hidden",
            "true"
        );
        /* -----------------------------------------------
           BACK
        ------------------------------------------------ */
        const collectionsHeader =
            document.createElement("div");
        collectionsHeader.className =
            "nav-submenu-header";
        const collectionsBack =
            document.createElement("button");
        collectionsBack.type =
            "button";
        collectionsBack.className =
            "nav-submenu-back";
        collectionsBack.innerHTML = `
            <span>‹</span>
            <span>
                Collections
            </span>
        `;
        collectionsHeader.appendChild(
            collectionsBack
        );
        collectionsSubmenu.appendChild(
            collectionsHeader
        );
        /* -----------------------------------------------
           CATALOGUE
        ------------------------------------------------ */
        const catalogue =
            createLink(
                "Voir le catalogue",
                "collections.html"
            );
        catalogue.classList.add(
            "nav-submenu-main"
        );
        collectionsSubmenu.appendChild(
            catalogue
        );
        /* -----------------------------------------------
           HOMMES
        ------------------------------------------------ */
        const hommes =
            createCategory(
                "Hommes",
                [
                    {
                        title: "Costumes",
                        url:
                            "hommes.html#costumes"
                    },
                    {
                        title: "Vestes",
                        url:
                            "hommes.html#vestes"
                    },
                    {
                        title: "Chemises",
                        url:
                            "hommes.html#chemises"
                    },
                    {
                        title: "Ensembles",
                        url:
                            "hommes.html#ensembles"
                    },
                    {
                        title: "Cérémonie",
                        url:
                            "hommes.html#ceremonie"
                    }
                ]
            );
        collectionsSubmenu.appendChild(
            hommes
        );
        /* -----------------------------------------------
           FEMMES
        ------------------------------------------------ */
        const femmes =
            createCategory(
                "Femmes",
                [
                    {
                        title: "Robes",
                        url:
                            "femmes.html#robes"
                    },
                    {
                        title: "Ensembles",
                        url:
                            "femmes.html#ensembles"
                    },
                    {
                        title: "Jupes",
                        url:
                            "femmes.html#jupes"
                    },
                    {
                        title: "Vestes",
                        url:
                            "femmes.html#vestes"
                    },
                    {
                        title: "Cérémonie",
                        url:
                            "femmes.html#ceremonie"
                    }
                ]
            );
        collectionsSubmenu.appendChild(
            femmes
        );
        /* -----------------------------------------------
           ENFANTS
        ------------------------------------------------ */
        const enfants =
            createLink(
                "Enfants",
                "enfants.html",
                "03"
            );
        collectionsSubmenu.appendChild(
            enfants
        );
        /* -----------------------------------------------
           ÉVÉNEMENTS
        ------------------------------------------------ */
        const evenements =
            createLink(
                "Événements",
                "evenements.html",
                "04"
            );
        collectionsSubmenu.appendChild(
            evenements
        );
        /* -----------------------------------------------
           ASSEMBLE
        ------------------------------------------------ */
        collectionsWrapper.appendChild(
            collectionsTrigger
        );
        collectionsWrapper.appendChild(
            collectionsSubmenu
        );
        collectionsLink.replaceWith(
            collectionsWrapper
        );
        /* -----------------------------------------------
           OPEN COLLECTIONS
        ------------------------------------------------ */
        collectionsTrigger.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                collectionsWrapper.classList.add(
                    "submenu-active"
                );
                collectionsTrigger.setAttribute(
                    "aria-expanded",
                    "true"
                );
                collectionsSubmenu.setAttribute(
                    "aria-hidden",
                    "false"
                );
            }
        );
        /* -----------------------------------------------
           BACK TO MAIN
        ------------------------------------------------ */
        collectionsBack.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                collectionsWrapper.classList.remove(
                    "submenu-active"
                );
                collectionsTrigger.setAttribute(
                    "aria-expanded",
                    "false"
                );
                collectionsSubmenu.setAttribute(
                    "aria-hidden",
                    "true"
                );
                closeCategoryMenus();
            }
        );
    }
    /* =====================================================
       CLOSE CATEGORY MENUS
       ===================================================== */
    function closeCategoryMenus() {
        navigation
            .querySelectorAll(
                ".nav-category-wrapper"
            )
            .forEach((wrapper) => {
                wrapper.classList.remove(
                    "category-active"
                );
                const trigger =
                    wrapper.querySelector(
                        ".nav-category-trigger"
                    );
                const submenu =
                    wrapper.querySelector(
                        ".nav-category-submenu"
                    );
                if (trigger) {
                    trigger.setAttribute(
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
            });
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
        const trigger =
            collectionsWrapper.querySelector(
                ".nav-submenu-trigger"
            );
        const submenu =
            collectionsWrapper.querySelector(
                ".nav-submenu"
            );
        if (trigger) {
            trigger.setAttribute(
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
        closeCategoryMenus();
    }
    /* =====================================================
       NORMAL LINKS
       ===================================================== */
    navigation
        .querySelectorAll(
            "a"
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
       ESCAPE
       ===================================================== */
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Escape") {
                return;
            }
            const activeCategory =
                navigation.querySelector(
                    ".nav-category-wrapper.category-active"
                );
            if (activeCategory) {
                activeCategory.classList.remove(
                    "category-active"
                );
                return;
            }
            if (
                collectionsWrapper &&
                collectionsWrapper.classList.contains(
                    "submenu-active"
                )
            ) {
                collectionsWrapper.classList.remove(
                    "submenu-active"
                );
                return;
            }
            closeMenu();
        }
    );
    /* =====================================================
       SCROLL REVEAL
       ===================================================== */
    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );
    if (revealElements.length) {
        const observer =
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
                observer.observe(
                    element
                );
            }
        );
    }
    /* =====================================================
       HEADER SCROLL
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