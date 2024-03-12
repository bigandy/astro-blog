export const getNavClassName = (url, requestPathname) => {
  const requestPathnameWithNoSlashes = requestPathname.replaceAll("/", "");
  const urlWithNoSlashes = url.replaceAll("/", "");
  const className =
    requestPathnameWithNoSlashes.includes(urlWithNoSlashes) && "active";

  return className;
};
