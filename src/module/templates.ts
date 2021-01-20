export function loadWOD20THTemplates() {
    let templatePaths: any[];
    templatePaths = [
        // Character sheet fragments
        'systems/wod20th/templates/actors/actorSheet.hbs',
    ];

    return loadTemplates(templatePaths);
}