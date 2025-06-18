export const getNavClassName = (url: string, requestPathname: string) => {
    // return early external links
    if (url.includes("http")) {
        return "";
    }

    if (url === "/" && requestPathname.includes("/blog/")) {
        return "active";
    }

    if (url === "/weeknotes" && requestPathname.includes("/weeknotes/")) {
        return "active";
    }

    return requestPathname.replace("/fr", "") === url ? "active" : "";
};
