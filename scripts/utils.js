import chalk from "chalk";

export const themeHeader = `
/**
 * @name dracula
 * @description cute dracula theme for discord~ (maintained fork)
 * @author rushii
 * @version 1.1.0
 * @website https://github.com/xabbott1/discord-dracula
 * @source https://xabbott1.github.io/discord-dracula/main.css
 */
`.trimStart();

export function dateHeader() {
	const date = new Date().toLocaleString()
		.replace(",", "");

	return chalk.gray(`[${date}]`);
}

export function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
