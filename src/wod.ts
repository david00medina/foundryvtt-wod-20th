/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: David Medina
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system
 */

import { registerSettings } from './module/system/settings.js';
import { preloadTemplates } from './module/system/preloadTemplates.js';
import {registerCharacterSheets} from "./module/system/registerCharacterSheets";
import {registerActors} from "./module/system/registerActors";

/**
 * Base path to the World of Darkness game system
 * @global
 * @type {string}
 */
export const WOD_ROOT = "systems/wod/"

/**
 * Runs the game system initialization functions
 */
Hooks.once('init', async function() {
	console.log('wod | Initializing wod');
	game.WoD = {};

	// Assign custom classes and constants here
	registerActors();

	// Register custom system settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
	registerCharacterSheets();
});

/**
 * Executes the functions which sets up Foundry VTT before
 * it turns its state to ready
 */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/**
 * Set of functions which are goind to be executed once
 * Foundry VTT is ready
 */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary