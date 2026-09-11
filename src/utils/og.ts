import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";

const fontData = readFileSync(
	join(process.cwd(), "public/fonts/Syne-Bold.ttf"),
);

const fonts = [
	{
		name: "Syne",
		data: fontData,
		weight: 700 as const,
		style: "normal" as const,
	},
];

export async function renderNoOGImage(): Promise<Response> {
	return new Response(null, {
		headers: { "Content-Type": "image/png" },
	});
}

export async function renderOGImage(
	jsx: Parameters<typeof satori>[0],
): Promise<Response> {
	const svg = await satori(jsx, { width: 1200, height: 630, fonts });
	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return new Response(new Uint8Array(png), {
		headers: { "Content-Type": "image/png" },
	});
}
