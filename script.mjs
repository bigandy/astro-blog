import {
	autocomplete,
	isCancel,
	note,
	outro,
	select,
	text,
} from "@clack/prompts";

import { Temporal } from "@js-temporal/polyfill";

import { $ } from "execa";

import fs from "fs-extra";

const openCodeInCodeEditor = async (newFile) => {
	const editor = "zed"; // could also be vscode

	await $`${editor} ${newFile}`;

	// await $`${editor} ${newDirectory}/index.html:2:5 -g`;
	// -g does not work with zed
	// 8th line. first character 8:1
	await $`${editor} ${newFile}:8:8`;
	return;
};

const showSuccessMessage = () => {
	note(
		`opening Code Editor to edit the code
opening default browser on http://localhost:8888
`,
		"Success",
	);
};

const runDevServer = async () => {
	await $`npm run dev -- --open`;
};

const runDevServerWithUrl = async (url) => {
	console.log("need to open browser at url ", url);
	await openSiteInBrowser(url);
	await $`npm run dev`;
};

const openSiteInBrowser = async (url) => {
	return await $({
		shell: true,
	})`open -a "Google Chrome Canary" "${url}"`;
};

async function main() {
	console.clear();

	// Which Path to take?
	// 1. [x] Create new Post
	// 2. [ ] Edit Existing Post

	const selection = await select({
		message: "What do you want to do first?",
		initialValue: "create",
		maxItems: 1,
		options: [
			{
				value: "create",
				label: "Create",
			},
			{
				value: "edit",
				label: "Edit",
			},
		],
	});

	if (selection === "edit") {
		const files = await fs.readdir("./src/content/blog");
		const filteredFiles = files.filter((file) => file.includes(".md"));

		const postToEdit = await autocomplete({
			message: "Select the demo you want to develop",
			initialValue: "",
			maxItems: 1,
			options: filteredFiles.map((post) => ({
				value: post,
				label: post,
			})),
		});

		const postFile = `src/content/blog/${postToEdit}`;

		const url = `http://localhost:8888/blog/${postToEdit.replace(".md", "")}`;

		try {
			// AHTODO: can this be done in serial?
			await Promise.all([
				runDevServerWithUrl(url),
				openCodeInCodeEditor(postFile),
				showSuccessMessage(),
			]);
		} catch (error) {
			console.error(error);
		}
	}

	// if (selection === "build") {
	//     const files = await fs.readdir("./src/demos");

	//     const demosSelection = await autocomplete({
	//         message: "Select the demo you want to build",
	//         initialValue: "",
	//         maxItems: 1,
	//         options: files.map((demo) => ({
	//             value: demo,
	//             label: demo,
	//         })),
	//     });

	//     const selectedDirectory = `src/demos/${demosSelection}`;

	//     try {
	//         // AHTODO: can this be done in serial?
	//         await runBuild(selectedDirectory);
	//         await runPreview(selectedDirectory);
	//     } catch (error) {
	//         console.error(error);
	//     }
	// }

	if (selection === "create") {
		const postTitle = await text({
			message: "Enter your post title (letters and spaces only)",
			placeholder: "a new post",
			// initialValue: "a new post",
			validate: (value) => {
				if (!value) {
					return "Please enter a Post title.";
				}

				if (!/^[a-zA-Z0-9- ]+$/.test(value)) {
					return "Name can only contain letters, numbers, and hyphens ";
				}

				const newFile = `src/content/blog/${value.trim().replaceAll(" ", "-")}.md`;

				if (fs.existsSync(newFile)) {
					return "file exists already, edit the title and try again";
				}

				// TODO: validate that there is a minimum of 3 letters
				return undefined;
			},
		});

		if (!isCancel(postTitle)) {
			note(`Valid title: ${postTitle}`, "Success");
		}
		const trimmedTitle = postTitle.trim().replaceAll(" ", "-");
		const newFile = `src/content/blog/${trimmedTitle}.md`;
		await createPostFile(newFile, postTitle);

		try {
			// AHTODO: can this be done in serial?
			await Promise.all([
				runDevServer(trimmedTitle),
				openCodeInCodeEditor(newFile),
				showSuccessMessage(),
			]);
		} catch (error) {
			console.error(error);
		}
	}

	outro("all done");
}

const createPostFile = async (newFile, title) => {
	try {
		if (!fs.existsSync(newFile)) {
			const date = Temporal.Now.plainDateISO();

			const { day, month, year } = Temporal.PlainDate.from(date);

			const pubDate = `${year}-${month}-${day}`;

			const content = `---
title: "${title}"
date: ${pubDate}
draft: false
tags: [""]
---

`;

			await fs.writeFile(newFile, content);
			note("success! New Post created");
		} else {
			throw new Error("post exists already. Show error");
		}
	} catch (err) {
		console.error(err);
	}
};

main().catch(console.error);
