export const getNavClassName = (
    url: string,
    requestPathname: string,
    extraClassName = "",
) => {
    const requestPathnameWithNoSlashes = requestPathname.replaceAll("/", "");
    const urlWithNoSlashes = url.replaceAll("/", "");
    const className = requestPathnameWithNoSlashes.includes(urlWithNoSlashes)
        ? "active"
        : "";

    return className + ` ${extraClassName}`;
};
