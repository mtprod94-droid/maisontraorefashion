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
    menuButton.addEventListener("click", () => {
        if (
            navigation.classList.contains("open")
        ) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    /* =====================================================
       CREATE LINK
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
       CREATE CATEGORY SUBMENU
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
        const header =
            document.createElement("div");
        header.className =
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
        header.appendChild(back);
        panel.appendChild(header);
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
            () => {
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
            () => {
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
           HEADER
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
           CATALOGUE
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
        /* ---------------------------------------------
           HOMMES
        --------------------------------------------- */
        const hommes =
            createCategorySubmenu(
                "Hommes",
                [
                    {
                        title: "Costumes",
                        url: "hommes.html#costumes"
                    },
                    {
                        title: "Vestes",
                        url: "hommes.html#vestes"
                    },
                    {
                        title: "Chemises",
                        url: "hommes.html#chemises"
                    },
                    {
                        title: "Ensembles",
                        url: "hommes.html#ensembles"
                    },
                    {
                        title: "Cérémonie",
                        url: "hommes.html#ceremonie"
                    }
                ]
            );
        collectionsPanel.appendChild(
            hommes
        );
        /* ---------------------------------------------
           FEMMES
        --------------------------------------------- */
        const femmes =
            createLink(
                "Femmes",
                "femmes.html",
                "02"
            );
        collectionsPanel.appendChild(
            femmes
        );
        /* ---------------------------------------------
           ENFANTS
        --------------------------------------------- */
        const enfants =
            createLink(
                "Enfants",
                "enfants.html",
                "03"
            );
        collectionsPanel.appendChild(
            enfants
        );
        /* ---------------------------------------------
           ÉVÉNEMENTS
        --------------------------------------------- */
        const evenements =
            createLink(
                "Événements",
                "evenements.html",
                "04"
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
            () => {
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
           BACK COLLECTIONS
        --------------------------------------------- */
        collectionsBack.addEventListener(
            "click",
            () => {
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
            }
        );
    }
    /* =====================================================
       CLOSE ALL SUBMENUS
       ===================================================== */
    function closeAllSubmenus() {
        if (collectionsWrapper) {
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
            collectionsWrapper
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
       ESCAPE
       ===================================================== */
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Escape") {
                return;
            }
            if (
                collectionsWrapper &&
                collectionsWrapper.querySelector(
                    ".nav-category-wrapper.category-active"
                )
            ) {
                const activeCategory =
                    collectionsWrapper.querySelector(
                        ".nav-category-wrapper.category-active"
                    );
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