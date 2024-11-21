---
title: "This Week I learned"
date: 2024-11-21
draft: false
description: ""
tags: ["learning"]
author: "Andrew"
---

## Netlify Redirects with Astro

Yesterday I was attempting to do a redirect on my Astro site which is hosted on Netlify (for free, really excellent hosting!) to my newly created Sveltekit site on a different sub-domain. I followed the recommended method of using a `_redirects` file in the `public` folder - this is specific to Astro, normally on other Netlify sites it just needs to be in the root of the project.

Here was my initial code:

```bash
# /public/_redirects
/cv https://cv.andrewhudson.dev
```

but nothing was working.

I then did some further research and discovered I needed to do a forced redirect because the Astro site still has an existing /cv route and code which meant that the redirect wasn't working.

The solution was to use a 301 redirect with some extra **force** - the **!**. Here's the final code I used:

```bash
# /public/_redirects
/cv https://cv.andrewhudson.dev 301!
```

## French

This week in my French classes at the Alliance Francaise we continued learning the pronouns COD / COI as <a href="https://learntofrench.com/master-cod-and-coi-in-french-explained/">explained here</a> and also continued to utilise the past tenses passé composé and the imparfait.

## Development

I am continuing to learn about CSS anchor positioning with @starting-style and popover action. Further to this I have started a seperate CV site using sveltekit.
