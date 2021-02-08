import {ROOT} from "../wod20th";

export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "systems/wod20th/templates"
		ROOT + 'templates/actor/WoD20thActorSheet.html',
		ROOT + 'templates/actor/components/WoD20thActorSheetHeader.html'
	];

	return loadTemplates(templatePaths);
}
