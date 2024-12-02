const pages: {
  [key: string]: {
    url: string;
    title: {
      default: string;
      fr?: string;
    };
    location: "header" | "footer" | "both";
    external?: boolean;
  };
} = {
  // "sites-i-like": {
  //   url: "/sites-i-like",
  //   title: {
  //     default: "Sites I like",
  //   },
  //   location: "footer",
  // },

  about: {
    url: "/about",
    title: {
      default: "About",
      fr: "À propos",
    },
    location: "footer",
  },

  demos: {
    url: "/experiments",
    title: {
      default: "Experiments",
      // fr: "Expériences",
    },
    location: "footer",
  },

  tools: {
    url: "/tools",
    title: {
      default: "Tools",
    },
    location: "footer",
  },

  blog: {
    url: "/blog",
    title: {
      default: "Archive",
      fr: "Les Archives",
    },
    location: "header",
  },

  weeknotes: {
    url: "/weeknotes",
    title: {
      default: "Weeknotes",
    },
    location: "header",
  },

  bookshelf: {
    url: "/bookshelf",
    title: {
      default: "Bookshelf",
      fr: "Bibliothèque",
    },
    location: "header",
  },

  now: {
    url: "/now",
    title: {
      default: "Now",
    },
    location: "both",
  },

  cv: {
    url: "/cv",
    title: {
      default: "CV",
      fr: "CV",
    },
    location: "header",
  },
};

export const headerPages = Object.values(pages).filter(({ location }) =>
  ["header", "both"].includes(location)
);

export const footerPages = Object.values(pages).filter(({ location }) =>
  ["footer", "both"].includes(location)
);
