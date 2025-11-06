import { isCancel, note, outro, select, text } from "@clack/prompts";

import fs from "fs-extra";

// import { setTimeout } from "node:timers/promises";
// import color from "picocolors";
//
//
//

// Add a leading zero if below 10 e.g. 5 => 05
const addLeadingZero = (number) => {
    return `0${number}`.slice(-2);
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
            // {
            //     value: "develop",
            //     label: "Develop",
            // },
            // {
            //     value: "build",
            //     label: "Build",
            // },
        ],
    });

    // if (selection === "develop") {
    //     const files = await fs.readdir("./src/demos");

    //     const projectFolder = await autocomplete({
    //         message: "Select the demo you want to develop",
    //         initialValue: "",
    //         maxItems: 1,
    //         options: files.map((demo) => ({
    //             value: demo,
    //             label: demo,
    //         })),
    //     });

    //     const newDirectory = `src/demos/${projectFolder}`;

    //     try {
    //         // AHTODO: can this be done in serial?
    //         await Promise.all([
    //             runDevServer(newDirectory),
    //             openCodeInCodeEditor(newDirectory),
    //             showSuccessMessage(),
    //         ]);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

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
            initialValue: "a new post",
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

                // TODO: validate that there is a minimum of 3 letters, a hyphen and a number e.g. pen-1
                return undefined;
            },
        });

        if (!isCancel(postTitle)) {
            note(`Valid title: ${postTitle}`, "Success");
        }

        const newFile = `src/content/blog/${postTitle.trim().replaceAll(" ", "-")}.md`;
        await createPostFile(newFile, postTitle);

        // try {
        //     // AHTODO: can this be done in serial?
        //     // await Promise.all([runDevServer(newDirectory), openCodeInCodeEditor(newDirectory), showSuccessMessage()]);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    outro("all done");
}

const createPostFile = async (newFile, title) => {
    try {
        if (!fs.existsSync(newFile)) {
            const today = new Date();

            const year = today.getFullYear();

            const day = addLeadingZero(today.getDate());
            const month = addLeadingZero(today.getMonth() + 1);

            const pubDate = `${year}-${month}-${day}`;

            const content = `---
title: "${title}"
date: ${pubDate}
draft: false
tags: [""]
---`;

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
