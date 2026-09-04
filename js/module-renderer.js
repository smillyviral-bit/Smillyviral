/* ============================================================
   MR.PERK HEADQUARTERS
   Module Renderer
   ============================================================ */

function createModuleCard(key, module) {

    const section = document.createElement("section");

    section.id = key;
    section.className = "module-section";

    const card = document.createElement("article");

    card.className = "module-card";

    if (module.status === MODULE_STATES.SOON) {
        card.classList.add("module-card--soon");
    }

    const content = document.createElement("div");

    content.className = "module-card__content";

    if (module.status === MODULE_STATES.SOON) {

        const status = document.createElement("span");

        status.className = "module-card__status";
        status.textContent = "Coming Soon";

        content.appendChild(status);
    }

    const title = document.createElement("h2");

    title.className = "module-card__title";
    title.textContent = module.title;

    content.appendChild(title);

    card.appendChild(content);
    section.appendChild(card);

    return section;
}
