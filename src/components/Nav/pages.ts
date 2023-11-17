const isDev = import.meta.env.MODE !== "production";
export const blogHomeUrl = "/blog";
export type Page = {
  url: string;
  title: string;
  header: boolean;
  hide?: boolean;
};

interface Pages {
  [key: string]: Page;
}
export const pages: Pages = {
  home: {
    url: "/",
    title: "Home",
    header: true,
  },
  blog: {
    url: blogHomeUrl,
    title: "Blog",
    header: true,
  },
  cv: {
    url: "/cv",
    title: "CV",
    header: true,
  },
  demos: {
    url: "/experiments",
    title: "Experiments",
    header: true,
  },
  about: {
    url: "/about",
    title: "About",
    header: false,
  },
  now: {
    url: "/now",
    title: "Now",
    header: false,
  },
  tools: {
    url: "/tools",
    title: "Tools",
    header: false,
  },
  bookshelf: {
    url: "/bookshelf",
    title: "Bookshelf",
    header: false,
  },
  "style-guide": {
    url: "/style-guide",
    title: "Style Guide",
    header: true,
    hide: !isDev,
  },
};
