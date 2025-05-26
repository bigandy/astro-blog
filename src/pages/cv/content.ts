import dayjs, { type Dayjs } from "dayjs";

export const themeColorKey = "cv-themeColor";

export const summary = `I am a senior software engineer with 14+ years of experience creating highly performant and usable
products, websites, desktop applications, and browser extensions using React, JS, and CSS.`;

export const personalInformation = {
    name: "Andrew JD Hudson",
    title: "Senior Front-end Engineer",
    email: "andrew@andrewhudson.dev",
    website: "https://andrewhudson.dev",
    phone: "+33608985800",
    location: "Grenoble, France",
};

export interface Role {
    url: string;
    location: string;
    title: string;
    start: Dayjs;
    end: Dayjs;
    showFullDates: boolean;
    summary: string[];
}
export interface Roles {
    [key: string]: Role;
}

export const roles: Roles = {
    "Scalable Software": {
        url: "https://www.scalable.com",
        location: "Remote, UK",
        title: "Senior Front-end Engineer",
        start: dayjs("July 2023"),
        end: dayjs("August 2024"),
        showFullDates: true,
        summary: [
            "Front-end React, D3, Typescript development of a web app for large organisations to monitor and improve team productivity.",

            "Took the designs of new features from Figma and turned them into stories, tasks and sub-tasks and then helping deliver the work.",

            "Web app development with React.js, Typescript, and D3.",

            "Mentored junior developers to help them understand front-end problems using my experience.",

            "I reviewed merge requests across the front-end team ensuring a consistently high quality product, testing the code as if I was a user and pointing out any problems with the code or the work.",

            "Worked closely with backend engineers to integrate APIs and manage data flows efficiently.",
        ],
    },
    "Venture Harbour": {
        url: "https://ventureharbour.com",
        location: "Remote, UK",
        title: "Senior Software Engineer",
        start: dayjs("October 2017"),
        end: dayjs("February 2023"),
        showFullDates: true,
        summary: [
            "Product-focused full-stack web development on an Electron-based productivity Desktop Application.",

            "Rapid iteration and protyping and integration of prototypes into websites and products.",

            "I created two Progressive Web Apps for two of our high traffic websites and concentrated on improving the performance of our websites and products. This helped improve our SEO, Lighthouse Scores, and Web Page Test performance resulting in a better UX and better Google Search ranking.",

            "I mentored the rest of the engineering team on front-end topics regularly producing demos and presentations on what I made and learned.",

            "I founded a culture of code quality based on automated code quality checking which helped dramatically when working with multiple developers, especially when reviewing merge requests and enforcing coding standards, for example when dealing with external contractors.",

            // "Web app development with CSS-in-JS, Next.js, GraphQL and Typescript.",

            // "I created a component library using Storybook to showcase and document.",

            // "I created a component library using Storybook to showcase and document.",
        ],
    },
    "Taylor & Francis": {
        url: "https://taylorandfrancis.com",
        location: "Didcot, UK",
        title: "Full Stack Web Developer",
        start: dayjs("October 2016"),
        end: dayjs("October 2017"),
        showFullDates: true,
        summary: [
            "Created custom performant WordPress and Expression Engine sites, and maintained existing ones.",
            "Designed, coded, delivered and trained up the users on a re-design of a society's new website.",
            "Hand-crafted a node tool to benchmark and monitor Business Sites using the Web Page Test API and display with React.",
            "Performed performance audits and carry out improvements on business and society sites.",
        ],
    },
    Photocrowd: {
        url: "https://www.photocrowd.com",
        location: "Oxford, UK",
        title: "Front-end React Developer",
        start: dayjs("March 2016"),
        end: dayjs("August 2016"),
        showFullDates: true,
        summary: [
            "Created new components and pages using React/Relay and Less from Photoshop designs.",

            "Integrated Webpack into the front-end development process to allow for code modularity, linting, and modern Javascript, and CSS.",

            "Instantiated the use of BEM code methodology for new CSS components as a better way of writing an maintaining CSS code.",
        ],
    },
    "Electric Studio": {
        url: "https://www.electricstudio.co.uk",
        location: "Didcot, UK",
        title: "Front-end WordPress Developer",
        start: dayjs("2013"),
        end: dayjs("2016"),
        showFullDates: true,
        summary: [
            "Created highly customised WordPress sites from Photoshop designs, with custom post types, taxonomies, meta boxes, shortcodes and functions.",

            "The sites were performant, using best practices and technologies, built within budget and in timeframes.",

            "Pre-launch client training, dealing with any client feedback via Basecamp or telephone.",
        ],
    },
    "Heath Wallace Ltd": {
        url: "https://www.heathwallace.com",
        location: "Reading, UK",
        title: "Creative UI Developer",
        start: dayjs("2010"),
        end: dayjs("2013"),
        showFullDates: true,
        summary: [
            "I built accessible, usable websites for clients including HSBC, RBS and Grant Thornton.",

            "Using CMSs such as WordPress, CQ5 and Sitecore to allow the client to control all content on their site.",

            "Knowledge Sharing through weekly masterclass sessions (I ran three: WordPress, CSS3, and Sass).",
        ],
    },
};

export const skills = [
    "Web Scraping",
    "Chrome Extension Development",
    "Redux and other React state libraries",
    "React",
    "Typescript",
    "CSS",
    "Next.js",
    "Astro",
    "Svelte",
    "Lit",
    "Svelte",
    "Electron",
    "GraphQL",
    "Sass",
    "CSS-in-JS",
    "Website Performance Optimisation",
    "Databases (Firebase, Postgres, MySQL)",
    "Serverless functions (Firebase, AWS)",
    "Storybook",
    "Testing with Cypress and Jest",
    "Accessibility",
    "SEO",
    "Git",
];

export interface SocialLink {
    href: string;
    name: string;
    shortLink: string;
}
export const socialLinks: Array<SocialLink> = [
    {
        href: "https://github.com/bigandy",
        name: "Github",
        shortLink: "github.com/bigandy",
    },
    {
        href: "https://codepen.io/bigandy",
        name: "Codepen",
        shortLink: "codepen.io/bigandy",
    },
    {
        href: "https://linkedin.com/in/andrew-hudson-software-engineer/",
        name: "Linkedin",
        shortLink: "linkedin.com/in/andrew-hudson-software-engineer/",
    },
    {
        href: "https://andrewhudson.dev",
        name: "Personal Site",
        shortLink: "andrewhudson.dev",
    },
];

export const portfolioLinks = [
    {
        href: "https://www.npmjs.com/package/@bigandy/sibling-count",
        name: "sibling-count web-component",
        shortLink: "npmjs.com/@bigandy/sibling-count",
        description:
            "A web-component that allows the prototyping of sibling-count() and sibing-index() css functionality before it is available in all browsers.",
    },
    {
        href: "https://www.scalable.com/",
        name: "Scalable",
        shortLink: "scalable.com",
        description:
            "a digital experience (DX) web app for visualising productivity and digital workplace efficiency using React, Typescript, and D3.",
    },
    {
        href: "https://truenorth.io",
        name: "TrueNorth",
        shortLink: "truenorth.io",
        description:
            "a marketing web app using NextJS, Typescript, GraphQL, Apollo, Prisma, with a Material-UI based component library.",
    },
    {
        href: "https://sereneapp.com",
        name: "Serene App",
        shortLink: "sereneapp.com",
        description:
            "Productivity desktop application for MacOS users using Electron, Firebase and React. With companion Chrome, Firefox and Edge extensions.",
    },
    {
        href: "https://photocrowd.com",
        name: "photocrowd.com",
        shortLink: "photocrowd.com",
        description:
            "front-end development with React/Relay, Less, and Webpack",
    },
    {
        href: "https://www.electrichosting.net/",
        name: "electrichosting.net",
        shortLink: "electrichosting.net",
        description:
            "a custom WordPress site where any part of the site was manageable by the client.",
    },
    {
        href: "https://allistergodfrey.com/",
        name: "allistergodfrey.com",
        shortLink: "allistergodfrey.com",
        description:
            "a custom responsive WordPress site with many interactive  features, galleries, and css transitions",
    },
    {
        href: "https://ojwmanagement.com/",
        name: "ojwmanagement.com",
        shortLink: "ojwmanagement.com",
        description:
            "a single-page responsive WordPress site with flexbox, responsive images, and SVG",
    },
    {
        href: "https://blog.oup.com/",
        name: "blog.oup.com",
        shortLink: "blog.oup.com",
        description: "responsive WordPress blog for Oxford University Press",
    },
];

export const education = [
    {
        name: "Masters CIW Designer",
        institution: "Computeach",
        start: dayjs("2009"),
        end: dayjs("2010"),
    },
    {
        name: "MChem (hons) Chemistry with Industrial Experience",
        institution: "University of Manchester",
        start: dayjs("1999"),
        end: dayjs("2003"),
    },
];

export const languages = [
    {
        language: "English",
        level: 5,
        levelText: "Native",
    },
    {
        language: "French",
        level: 2,
        levelText: "Intermediate",
    },
];
