const pages: {
//     [key: string]: {
//         url: string;
//         title: { default: string; fr?: string };
//         location: "header" | "footer" | "both";
//         external?: boolean;
//     };
// } = {
//     "sites-i-like": {
//         url: "/sites-i-like",
//         title: "Sites I like",
//         location: "footer",
//     },

//     about: {
//         url: "/about",
//         title: "About",
//         location: "header",
//     },

//     tools: {
//         url: "/tools",
//         title: "Tools",
//         location: "footer",
//     },

//     archive: {
//         url: "/blog",
//         title: "Blog",
//         location: "header",
//     },
//     cv: {
//         url: "/cv",
//         title: "CV",
//         location: "header",
//     },

//     experiments: {
//         url: "/experiments",
//         title: "Experiments",
//         location: "footer",
//     },

//     weeknotes: {
//         url: "/weeknotes",
//         title: "Weeknotes",
//         location: "footer",
//     },

//     bookshelf: {
//         url: "/bookshelf",
//         title: "Bookshelf",
//         location: "footer",
//     },

//     now: {
//         url: "/now",
//         title: "Now",
//         location: "footer",
//     },
// =======
  [key: string]: {
    url: string;
    title: { default: string; fr?: string };
    location: "header" | "footer" | "both";
    external?: boolean;
  };
} = {
  "sites-i-like": {
    url: "/sites-i-like",
    title: {
      default: "Sites I like",
    },
    location: "footer",
  },

  about: {
    url: "/about",
    title: {
      default: "About",
      fr: "À propos",
    },
    location: "header",
  },

  demos: {
    url: "/experiments",
    location: "footer",
    title: {
      default: "Experiments",
      fr: "Expériences",
    },
  },

  tools: {
    url: "/tools",
    title: {
      default: "Tools",
    },
    location: "footer",
  },

  blog: {
    url: "/",
    title: {
      default: "Archive",
      fr: "Les Archives",
    },
    location: "header",
  },

  weeknotes: {
    url: "/weeknotes",
    location: "header",
    title: {
      default: "Weeknotes",
    },
  },

  now: {
    url: "/now",
    title: {
      default: "Now",
    },
    location: "footer",
  },

  bookshelf: {
    url: "/bookshelf",
    title: {
      default: "Bookshelf",
      fr: "Bibliothèque",
    },
    location: "header",
  },

  cv: {
    url: "/cv",
    location: "header",
    title: {
      default: "CV",
      fr: "CV",
    },
  },
};

export const headerPages = Object.values(pages).filter(({ location }) =>
    ["header", "both"].includes(location),
);

export const footerPages = Object.values(pages).filter(({ location }) =>
    ["footer", "both"].includes(location),
);
