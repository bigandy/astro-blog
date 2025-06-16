export const getNavClassName = (url: string, requestPathname: string) => {
    // return early external links
    if (url.includes("http")) {
        return "";
    }

    if (url === "/" && requestPathname.includes("/blog/")) {
        return "active";
    }

    return requestPathname.replace("/fr", "") === url ? "active" : "";
};
