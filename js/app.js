/* ============================================================
   MR.PERK HEADQUARTERS
   Application Entry Point
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {

    Engine.start();

    initializeNavigation();

    initializeModules();

});

function initializeNavigation() {

    const navigationTrack =
        document.getElementById("navigationTrack");

    if (!navigationTrack) {
        return;
    }

    Object.entries(siteConfig.modules).forEach(
        ([key, module]) => {

            if (!isModulePublic(module)) {
                return;
            }

            const item =
                document.createElement("a");

            item.className = "navigation__item";
            item.href = `#${key}`;
            item.textContent = module.title;

            navigationTrack.appendChild(item);

        }
    );

}


function initializeModules() {

    const main =
        document.querySelector("main");

    if (!main) {
        return;
    }

    Object.entries(siteConfig.modules).forEach(
        ([key, module]) => {

            if (!isModulePublic(module)) {
                return;
            }

            const existing =
                document.getElementById(key);

            if (existing) {
                existing.remove();
            }

            const moduleElement =
                createModuleCard(key, module);

            main.appendChild(moduleElement);

        }
    );

}
