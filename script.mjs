#!/usr/bin/env zx
$.verbose = true;

const postTitle = (
    await question("What title do you want to give the post? ")
).trim();

const postTitleHyphenated = postTitle.replaceAll(" ", "-");

const newFileLocation = `src/content/blog/${postTitleHyphenated}.md`;

await $`cp template-content/template-blog-post.md ${newFileLocation}`;
const PUB_DATE = await $`date +%Y-%m-%d`;

const f1 = tmpfile();
await $`awk -v postTitle=${postTitle} '{sub(/TITLE/,postTitle)}1' ${newFileLocation} | awk -v pubDate=${PUB_DATE} '{sub(/PUBDATE/,pubDate)}1' > ${f1} && mv ${f1} ${newFileLocation}`;

await $(`open ${`http://localhost:1234/blog/${postTitleHyphenated}`}`);

await $`code ${newFileLocation}:8:7 -g`;
await $`npm run dev -- --port 1234`;

// const startServer =
//     (await question("Do you want to start the server? (Y) / N")).trim() || "Y";

// if (startServer === "Y") {
//     console.log("Start server please");
//     await $`npm run dev -- --open`;
// } else {
//     console.log("no server running");
// }
