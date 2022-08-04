import { Game } from "phaser";

import MainScene from "./main.scene";

// Docs:
// https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html
// https://newdocs.phaser.io/docs/3.55.2/namespaces


const gameConfig = {
	title: "Phaser Typescript Template",        // The title of the game. Shown in the browser console.
	url: "/",                                   // The URL of the game. Shown in the browser console.
	version: "1.0.0",                           // The version of the game. Shown in the browser console.
	disableContextMenu: true,                   // Disable the browser's default 'contextmenu' event (usually triggered by a right-button mouse click).

	// {Phaser.Types.Core.ScaleConfig} The Scale Manager configuration.
	scale: {
		mode: Phaser.Scale.RESIZE,
	},

	// {Phaser.Types.Core.LoaderConfig} Loader configuration.
	loader: {
		baseURL: "/assets/"
	},

	// Array.<Phaser.Scene>
	scene: [
		MainScene
	]
};


// @ts-ignore
window['game'] = new Game( gameConfig );
