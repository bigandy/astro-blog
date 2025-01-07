export const summary = `I am a senior software engineer with 14+ years of experience creating highly performant and usable
products, websites, desktop applications, and browser extensions using React, JS, and CSS.`;

export const personalInformation = {
    name: "Andrew JD Hudson",
    title: "Senior Front-end Engineer",
    email: "ahudson@gmail.com",
    website: "https://andrewhudson.dev",
    phone: "+33608985800",
    location: "Grenoble, France",
};

export interface Role {
    [key: string]: {
        url: string;
        location: string;
        title: string;
        start: string;
        end: string;
        showFullDates: boolean;
        summary: string[];
    };
}

export const roles: Role = {
    "Scalable Software": {
        url: "https://www.scalable.com",
        location: "Remote, UK",
        title: "Senior Front-end Engineer",
        start: "July 2023",
        end: "August 2024",
        showFullDates: true,
        summary: [
            "Web app development with React.js, Typescript, and D3 taking designs in Figma and Confluence and turning them into stories, tasks and sub-tasks and then delivering the work.",
            "Mentored junior developers and reviewed merge requests across the front-end team ensuring a consistently high quality product.",
            "Estimated, planned and documented new features with product and design.",
            "Created new features and specced out API changes with the backend team.",
            // "<li>Creating API contract with the backend API developer</li>",
            // <li>Mocking data with express to simulate the API response until backend finished API work</li>",
        ],
    },
    "Venture Harbour": {
        url: "https://ventureharbour.com",
        location: "Remote, UK",
        title: "Senior Software Engineer",
        start: "October 2017",
        end: "February 2023",
        showFullDates: true,
        summary: [
            "Web app development with CSS-in-JS, Next.js, GraphQL and Typescript.",
            "I created two Progressive Web Apps and concentrated on improving the performance of our websites and products. This helped improve our SEO, Lighthouse Scores, and Web Page Test performance.",
            "I created a component library using Storybook to showcase and document.",
            "I mentored the rest of the engineering team on front-end topics regularly producing demos and presentations on what I made and learned.",
            // "I created a component library using Storybook to showcase and document.",
            "I founded a culture of code quality based on automated code quality checking which helped dramatically when working with multiple developers, especially when reviewing merge requests and enforcing coding standards.",
        ],
    },
    "Taylor & Francis": {
        url: "https://taylorandfrancis.com",
        location: "Didcot, UK",
        title: "Full Stack Web Developer",
        start: "October 2016",
        end: "October 2017",
        showFullDates: true,
        summary: [
            "I created custom performant WordPress and Expression Engine sites.",
            "I hand-crafted a node tool to benchmark and monitor Business Sites using the Web Page Test API and display with React.",
            "Perform performance audits and carry out improvements on business and society sites.",
        ],
    },
    Photocrowd: {
        url: "https://www.photocrowd.com",
        location: "Oxford, UK",
        title: "Front-end React Developer",
        start: "March 2016",
        end: "August 2016",
        showFullDates: true,
        summary: [
            "I created new components and pages using React/Relay and Less from Photoshop designs.",
            "I integrated Webpack into the development process to allow for code modularity, linting, and writing modular ES6 JS.",
            "I implemented the application of BEM code methodology for new CSS components.",
        ],
    },
    "Electric Studio": {
        url: "https://www.electricstudio.co.uk",
        location: "Didcot, UK",
        title: "Front-end WordPress Developer",
        start: "2013",
        end: "2016",
        showFullDates: true,
        summary: [
            "I created highly customised WordPress sites from Photoshop designs, with custom post types, taxonomies, meta boxes, shortcodes and functions.",
            "The sites were performant, using best practices and technologies, built within budget and in timeframes.",
            "Pre-launch client training, dealing with any client feedback via Basecamp or telephone.",
        ],
    },
    "Heath Wallace Ltd": {
        url: "https://www.heathwallace.com",
        location: "Reading, UK",
        title: "Creative UI Developer",
        start: "2010",
        end: "2013",
        showFullDates: true,
        summary: [
            "I built highly accessible websites for clients including HSBC, RBS and Grant Thornton.",
            "Using CMSs such as WordPress, CQ5 and Sitecore to allow the client to control all content on their site.",
            "Knowledge Sharing through weekly masterclass sessions (I ran three: WordPress; CSS3; and Sass).",
        ],
    },
};

export const skills = [
    "Web Scraping",
    "Chrome Extension Development",
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
        href: "https://www.scalable.com/",
        name: "Scalable",
        shortLink: "scalable.com",
        description:
            "a digital experience web app for visualising Productivity and Digital Workplace Efficiency using React, Typescript, and D3.",
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
            "Productivity Application for MacOS users using Electron, Firebase, and React. With companion Chrome, Firefox and Edge extensions.",
    },
    {
        href: "https://photocrowd.com",
        name: "photocrowd.com",
        shortLink: "photocrowd.com",
        description:
            "front-end development with React/Relay, Less, and Webpack",
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
