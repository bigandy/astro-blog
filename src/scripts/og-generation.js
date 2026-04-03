import puppeteer from "puppeteer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";



const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getSomePosts = async () => {
	const posts = [];
	try {
	const files = await fs.readdir('./src/content/blog', { recursive: true, withFileTypes: true });

		// console.log({files: files.filter(file => file.includes('.md'))});
		const keepFiles = files
			.filter(file => !file.isDirectory())
			.filter(file => file.name.includes('.md'))
			.filter(file => !file.parentPath.includes('-drafts'))

			.map(file => {
				if (file.name.includes('index.')) {
					return file.parentPath + '/';
				} else {
					return file.parentPath + "/" + file.name.replace('.mdx', '').replace('.md', '') + '/';
				}
			})
			.map(file => file.replace('./src/content', ""));
			return keepFiles
	} catch (err) {
		console.error(err);
	}


}

async function generateOGImages() {
	const posts = await getSomePosts();
	// const templatePath = path.join(__dirname, "../../dist/open-graph/index.html");

	// const distDir = path.join(__dirname, "../../dist");

	console.log("Generating OG images...");
	console.log({posts});

	// const browser = await puppeteer.launch();

	// Set the limit when testing
	// let limit = 30;

	// for (const post of posts) {
	// 	// if (limit-- <= 0) {
	// 	// 	console.log("Limit reached, stopping generation.");
	// 	// 	break;
	// 	// }

	// 	const page = await browser.newPage();

	// 	const url = `file://${templatePath}?title=${encodeURIComponent(post.title)}`;
	// 	await page.goto(url);
	// 	await page.setViewport({ width: 1200, height: 630 });

	// 	const outputDir = path.join(distDir, "og-image");
	// 	await fs.mkdir(outputDir, { recursive: true });

	// 	await page.screenshot({
	// 		path: path.join(outputDir, `${post.id}.png`),
	// 		type: "png",
	// 	});

	// 	await page.close();
	// }

	// await browser.close();
}

generateOGImages().catch(console.error);