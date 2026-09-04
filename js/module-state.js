/* ============================================================
   MR.PERK HEADQUARTERS
   Module State System
   ============================================================ */

const MODULE_STATES = {
    LIVE: "live",
    SOON: "soon",
    BETA: "beta",
    PRIVATE: "private",
    ARCHIVED: "archived"
};

function isModulePublic(module) {
    return module.visible === true &&
           module.status !== MODULE_STATES.PRIVATE;
}
