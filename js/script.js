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
    menuButton.addEventListener(
        "click",
        () => {
            if (
                navigation.classList.contains("open")
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
    function createCategorySubmenu(
        title,
        categories
    ) {
        const wrapper =
            document.createElement("div");
        wrapper.className =
            "nav-category-wrapper";
        /* ---------------------------------------------
           CATEGORY TRIGGER
        --------------------------------------------- */
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
        /* ---------------------------------------------
           CATEGORY PANEL
        --------------------------------------------- */
        const panel =
            document.createElement("div");
        panel.className =
            "nav-category-submenu";
        panel.setAttribute(
            "aria-hidden",
            "true"
        );
        /* ---------------------------------------------
           BACK BUTTON
        --------------------------------------------- */
        const categoryHeader =
            document.createElement("div");
        categoryHeader.className =
            "nav-category-header";
        const back =
            document.createElement("button");
        back.type = "button";
        back.className =
            "nav-category-back";
        back.innerHTML = `
            <span>‹</span>
            <span>
                ${title}
            </span>
        `;
        categoryHeader.appendChild(back);
        panel.appendChild(categoryHeader);
        /* ---------------------------------------------
           CATEGORY LINKS
        --------------------------------------------- */
        categories.forEach(
            (category, index) => {
                const link =
                    createLink(
                        category.title,
                        category.url,
                        String(index + 1).padStart(
                            2,
                            "0"
                        )
                    );
                panel.appendChild(link);
            }
        );
        /* ---------------------------------------------
           ASSEMBLE
        --------------------------------------------- */
        wrapper.appendChild(trigger);
        wrapper.appendChild(panel);
        /* ---------------------------------------------
           OPEN
        --------------------------------------------- */
        trigger.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                /* Close other category panels */
                navigation
                    .querySelectorAll(
                        ".nav-category-wrapper.category-active"
                    )
                    .forEach((activeWrapper) => {
                        if (
                            activeWrapper !== wrapper
                        ) {
                            activeWrapper.classList.remove(
                                "category-active"
                            );
                            const activeTrigger =
                                activeWrapper.querySelector(
                                    ".nav-category-trigger"
                                );
                            const activePanel =
                                activeWrapper.querySelector(
                                    ".nav-category-submenu"
                                );
                            if (activeTrigger) {
                                activeTrigger.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );
                            }
                            if (activePanel) {
                                activePanel.setAttribute(
                                    "aria-hidden",
                                    "true"
                                );
                            }
                        }
                    });
                wrapper.classList.add(
                    "category-active"
                );
                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );
                panel.setAttribute(
                    "aria-hidden",
                    "false"
                );
            }
        );
        /* ---------------------------------------------
           BACK
        --------------------------------------------- */
        back.addEventListener(
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
                panel.setAttribute(
                    "aria-hidden",
                    "true"
                );
            }
        );
        /* ---------------------------------------------
           CLOSE AFTER LINK
        --------------------------------------------- */
        panel
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
    let collectionsWrapper = null;
    if (collectionsLink) {
        collectionsWrapper =
            document.createElement("div");
        collectionsWrapper.className =
            "nav-submenu-wrapper";
        /* ---------------------------------------------
           COLLECTIONS TRIGGER
        --------------------------------------------- */
        const collectionsTrigger =
            document.createElement("button");
        collectionsTrigger.type = "button";
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
        /* ---------------------------------------------
           COLLECTIONS PANEL
        --------------------------------------------- */
        const collectionsPanel =
            document.createElement("div");
        collectionsPanel.className =
            "nav-submenu";
        collectionsPanel.setAttribute(
            "aria-hidden",
            "true"
        );
        /* ---------------------------------------------
           COLLECTIONS HEADER
        --------------------------------------------- */
        const collectionsHeader =
            document.createElement("div");
        collectionsHeader.className =
            "nav-submenu-header";
        const collectionsBack =
            document.createElement("button");
        collectionsBack.type = "button";
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
        collectionsPanel.appendChild(
            collectionsHeader
        );
        /* ---------------------------------------------
           MAIN CATALOGUE
        --------------------------------------------- */
        const catalogue =
            createLink(
                "Voir le catalogue",
                "collections.html"
            );
        catalogue.classList.add(
            "nav-submenu-main"
        );
        collectionsPanel.appendChild(
            catalogue
        );
        /* =================================================
           HOMMES
           ================================================= */
        const hommes =
            createCategorySubmenu(
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
        collectionsPanel.appendChild(
            hommes
        );
        /* =================================================
           FEMMES
           ================================================= */
        const femmes =
            createCategorySubmenu(
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
        collectionsPanel.appendChild(
            femmes
        );
        /* =================================================
           ENFANTS
           ================================================= */
        const enfants =
            createCategorySubmenu(
                "Enfants",
                [
                    {
                        title: "Bébés",
                        url:
                            "enfants.html#bebes"
                    },
                    {
                        title: "Garçons",
                        url:
                            "enfants.html#garcons"
                    },
                    {
                        title: "Filles",
                        url:
                            "enfants.html#filles"
                    },
                    {
                        title: "Ensembles",
                        url:
                            "enfants.html#ensembles"
                    },
                    {
                        title: "Cérémonie",
                        url:
                            "enfants.html#ceremonie"
                    }
                ]
            );
        collectionsPanel.appendChild(
            enfants
        );
        /* =================================================
           ÉVÉNEMENTS
           ================================================= */
        const evenements =
            createCategorySubmenu(
                "Événements",
                [
                    {
                        title: "Mariage",
                        url:
                            "evenements.html#mariage"
                    },
                    {
                        title: "Cérémonie",
                        url:
                            "evenements.html#ceremonie"
                    },
                    {
                        title: "Soirée",
                        url:
                            "evenements.html#soiree"
                    },
                    {
                        title: "Événement professionnel",
                        url:
                            "evenements.html#professionnel"
                    }
                ]
            );
        collectionsPanel.appendChild(
            evenements
        );
        /* ---------------------------------------------
           ASSEMBLE COLLECTIONS
        --------------------------------------------- */
        collectionsWrapper.appendChild(
            collectionsTrigger
        );
        collectionsWrapper.appendChild(
            collectionsPanel
        );
        collectionsLink.replaceWith(
            collectionsWrapper
        );
        /* ---------------------------------------------
           OPEN COLLECTIONS
        --------------------------------------------- */
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
                collectionsPanel.setAttribute(
                    "aria-hidden",
                    "false"
                );
            }
        );
        /* ---------------------------------------------
           BACK TO MAIN MENU
        --------------------------------------------- */
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
                collectionsPanel.setAttribute(
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
                const panel =
                    wrapper.querySelector(
                        ".nav-category-submenu"
                    );
                if (trigger) {
                    trigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
                if (panel) {
                    panel.setAttribute(
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
        const collectionTrigger =
            collectionsWrapper.querySelector(
                ".nav-submenu-trigger"
            );
        const collectionPanel =
            collectionsWrapper.querySelector(
                ".nav-submenu"
            );
        if (collectionTrigger) {
            collectionTrigger.setAttribute(
                "aria-expanded",
                "false"
            );
        }
        if (collectionPanel) {
            collectionPanel.setAttribute(
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
            const activeCategory =
                navigation.querySelector(
                    ".nav-category-wrapper.category-active"
                );
            if (activeCategory) {
                activeCategory.classList.remove(
                    "category-active"
                );
                const trigger =
                    activeCategory.querySelector(
                        ".nav-category-trigger"
                    );
                const panel =
                    activeCategory.querySelector(
                        ".nav-category-submenu"
                    );
                if (trigger) {
                    trigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
                if (panel) {
                    panel.setAttribute(
                        "aria-hidden",
                        "true"
                    );
                }
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
                const trigger =
                    collectionsWrapper.querySelector(
                        ".nav-submenu-trigger"
                    );
                const panel =
                    collectionsWrapper.querySelector(
                        ".nav-submenu"
                    );
                if (trigger) {
                    trigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
                if (panel) {
                    panel.setAttribute(
                        "aria-hidden",
                        "true"
                    );
                }
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