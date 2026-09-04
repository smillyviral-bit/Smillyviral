/* ============================================================
   MR.PERK HEADQUARTERS
   Application Entry Point
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

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
