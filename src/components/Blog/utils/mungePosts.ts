import { getCollection } from "astro:content";

export const prerender = true;

export const mungePosts = async (locale: "en" | "fr") => {
    const collectionFrench = await getCollection("blog-fr");
    const collectionEnglish = await getCollection("blog");

    // Loop through the English posts (I currently will always start with the English version, so it will be there)
    // If there is a french post with the same slug, replace the english with the French
    // if not then set has
    const posts = collectionEnglish.map((englishPost) => {
        const frenchPost = collectionFrench.find(
            ({ slug: frenchPostSlug }) => frenchPostSlug === englishPost.slug,
        );

        const post = locale && frenchPost ? frenchPost : englishPost;

        return { post, hasTranslation: locale && frenchPost };
    });
    return posts;
};
