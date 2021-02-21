import {WOD_ROOT} from "../../wod";

/**
 * It loads the custom World of Darkness static templates to be shown
 * @return {undefined}
 */
export async function preloadTemplates() {
	const templatePaths = [
		// Add paths to "systems/wod/templates"
		WOD_ROOT + 'templates/actor/vampire-actor-sheet.handlebars',
		WOD_ROOT + 'templates/actor/mage-actor-sheet.handlebars',
		WOD_ROOT + 'templates/actor/actor-sheet.handlebars',
		WOD_ROOT + 'templates/actor/components/wod-actor-sheet-header.handlebars'
	];

	return loadTemplates(templatePaths);
}
