// scripts/create-publication.ts
import { StandardSitePublisher } from "@kckempf/astro-standard-site";

const publisher = new StandardSitePublisher({
	identifier: "andrewhudson.dev",
	password: process.env.ATPROTO_APP_PASSWORD,
});

await publisher.login();

const result = await publisher.publishPublication({
	name: "Andrew JD Hudson's Site",
	url: "https://andrewhudson.dev",
	description: "Thoughts on code, life, and everything",
	// Optional: customize your theme colors (RGB 0-255)
	basicTheme: {
		background: { r: 13, g: 17, b: 23 },
		foreground: { r: 230, g: 237, b: 243 },
		accent: { r: 74, g: 124, b: 155 },
		accentForeground: { r: 255, g: 255, b: 255 },
	},
	preferences: {
		showInDiscover: true,
	},
});

console.log("Publication created!");
console.log("AT-URI:", result.uri);
console.log("Save this rkey for verification:", result.uri.split("/").pop());
