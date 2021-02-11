import {WOD_ROOT} from "../../wod";

/**
 * It loads the custom World of Darkness static templates to be shown
 * @return {undefined}
 */
export async function preloadTemplates() {
	const templatePaths = [
		// Add paths to "systems/wod/templates"
		WOD_ROOT + 'templates/actor/WoDActorSheet.handlebars',
		WOD_ROOT + 'templates/actor/components/WoDActorSheetHeader.handlebars'
	];

	return loadTemplates(templatePaths);
}
