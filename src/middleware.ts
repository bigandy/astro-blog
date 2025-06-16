// AHTODO: fix this file! Is it needed?
// import { defineMiddleware } from "astro:middleware";
// import { redirectToDefaultLocale } from "astro:i18n";

// Example middleware that redirects all requests to the default locale apart for the /about page
export const onRequest = async (context, next) => {
    const response = await next();
    // if (response.status >= 300) {
    //     return redirectToDefaultLocale(context, response);
    // }
    return response;
};
