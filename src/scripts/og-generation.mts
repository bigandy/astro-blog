import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { getAllPosts } from "../components/Blog/utils/getAllPosts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateOGImages() {
	const posts = await getAllPosts();
	const templatePath = path.join(__dirname, "../../dist/open-graph/index.html");

	const distDir = path.join(__dirname, "../../dist");

	console.log("Generating OG images...");
	console.log(`Found ${posts.length} slugs.`);

	const browser = await puppeteer.launch();

	// Set the limit when testing
	// let limit = 30;

	for (const post of posts) {
		// if (limit-- <= 0) {
		// 	console.log("Limit reached, stopping generation.");
		// 	break;
		// }

		const page = await browser.newPage();

		const url = `file://${templatePath}?title=${encodeURIComponent(post.title)}`;
		await page.goto(url);
		await page.setViewport({ width: 1200, height: 630 });

		const outputDir = path.join(distDir, "og-image");
		await fs.mkdir(outputDir, { recursive: true });

		await page.screenshot({
			path: path.join(outputDir, `${post.id}.png`),
			type: "png",
		});

		await page.close();
	}

	await browser.close();
}

generateOGImages().catch(console.error);
