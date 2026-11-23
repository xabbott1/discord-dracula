import {mkdirSync, writeFileSync} from "node:fs";
import {join} from "node:path";
import chalk from "chalk";
import * as sass from "sass";

import {dateHeader, themeHeader} from "./utils.js";

const srcPath = join(import.meta.dirname, "../src/main.scss");
const distPath = join(import.meta.dirname, "../dist");
const outCssPath = join(distPath, "main.css");
const outMapPath = join(distPath, "main.css.map");

try {
	let output = themeHeader;

	const result = sass.compile(srcPath, {
			sourceMap: true,
			style: "compressed",
			verbose: true,
		}
	);

	output += result.css;
	output += "\n/*# sourceMappingURL=main.css.map */";

	mkdirSync(distPath, {recursive: true});
	writeFileSync(outCssPath, output);
	writeFileSync(outMapPath, JSON.stringify(result.sourceMap));

	console.log(dateHeader() + chalk.green(" Successfully compiled theme."));
} catch (e) {
	console.log(dateHeader() + chalk.red(" Failed to compile theme"));
	console.log(e.sassMessage ? e.message : e);
}
