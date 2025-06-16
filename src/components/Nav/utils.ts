export const getNavClassName = (url: string, requestPathname: string) => {
    // return early external links
    if (url.includes("http")) {
        return "";
    }
    // let requestPathnameWithNoSlashes = requestPathname.replaceAll("/", "");
    // const urlWithNoSlashes = url.replaceAll("/", "");

    // if (locale === "fr") {
    //     requestPathnameWithNoSlashes.replace("fr", "");
    // }

    const className =
        requestPathname.replace("/fr", "") === url ? "active" : "";

    return className;
};
