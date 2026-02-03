---
title: "@custom-media for feature flags"
date: 2026-01-26
draft: true
tags: [""]
---

I recently saw that @custom-media is [available in Firefox under an about:config flag](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/146#:~:text=Custom%20media%20queries%3A%20layout.css.custom%2Dmedia.enabled). I naturally wondered what they were and so I now am recording my findings.

## What is @custom-media? Derp

A @custom-media query is custom media query defined by a `name` and a `query`. For example `@custom-media --small-screen (max-width: 500px);` The name is `--small-screen` and the value is `(max-width: 500px)`.

To use a @custom-media query you use the `name`:

```css
@custom-media --small-screen (max-width: 500px);

@media (--small-screen) {
    body {
        padding: 1rem;
    }
}
/* or */
body {
    @media (--small-screen) {
        h1 {
            font-size: 16px;
        }
    }
}
```

### Combining multiple @custom-media queries
```css
@custom-media --print (print);
@custom-media --touch (print);

```



```css title="current-media-queries.css"
/* Touch Media Query */
@media (hover: none) and (pointer: coarse) {
    /* CSS to target touch-only devices */
    body {
        color: white;
        background: green;
    }
}

/* Medium sized device media query */
@media (480px <= width < 768px) {
    /* CSS to target medium-only devices */
}
```

With @custom-media you can specify @custom-media variables:

```css title="custom-media-queries.css"
/* Define custom-media queries */
@custom-media --touch (hover: none) and (pointer: coarse);
@custom-media --medium-only (480px <= width < 768px);

/* and use */
@media (--touch) {
    /* CSS To target touch  devices */
}

/* or combine more than one:*/
@media (--touch) and (--medium-only) {
    /* CSS To target touch and medium-only devices */
}
```


### The problems it solves
In a large CSS project there will be hundreds of occasions that you are using media queries. With each use there is the possibility of using a slightly different media query leading to a inconsistent janky experience for the user.

```css
@media (min-width: 700px) {}
@media (min-width: 699px) and (max-width: 1500px) {}
@media (width > 700px) {}
@media (inline-size >= 700px) {}
```

To be consistent across the project which break-points these queries are applied it is now simple to define the @custom-media variables up front and use them throughout your codebase.

### As feature flags
You can assign a value to a custom media query that is boolean. This allows the use of the @custom-media query as a feature flag.

```css title="feature-flag.css"
@custom-media --flag-fancy-title true;

@media (--flag-fancy-title) {
    h1 {
        background-clip: text;
        background-image: linear-gradient(to right, red, orange);
    }
}
```


### Can you update them?
```css title="updating-custom-media.css"
/* define once */
@custom-media --cmq-thin (inline-width < 500px);


/* update */
@custom-media --cmq-thin (inline-width < 300px);
```

The last definition of the @custom-media wins (i.e. `(inline-width < 300px)` in the code above).


### Versus @container style() queries

@custom-media need to be defined before they can be used, and cannot be nested inside other rules, including at-rules. For example the code below will not
```css
@custom-media --test true;

section {
    @custom-media --test false;

    h2 {
        color: red;
    }

    @media (--test) {
        h2 {
            color: deepPink;
        }
    }
}
```

the --test will evaluate to `true` even inside the `section` so that the color of the h2 will be `deepPink` not red as hoped for. After looking on CSSWG repo I found that this is [currently intentional](https://github.com/w3c/csswg-drafts/issues/12536#issuecomment-3204778132) that @custom-media need to be defined upfront.

@container style() queries **can** be updated

```css
:root {
    --test: true;
}

section {
    --test: false;

    h2 {
        color: red;
    }

    @container style(--test: true) {
        h2 {
            color: deepPink;
        }
    }
}
```
which does evaluate to a h2 color of `red` as I wanted.


### Links
- [MDN - @custom-media article](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@custom-media)
- [CSSWG Spec Draft - @custom-media](https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media)
- [Can I use - @custom-media](https://caniuse.com/?search=%40custom-media)


### Browser Support
- **Firefox** - From version 146 users must explicitly set the layout.css.custom-media.enabled preference to true. To change preferences in Firefox, visit about:config. See [MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@custom-media#browser_compatibility)
- **Chrome** - a half-finished prototype in Chrome Canary with a command line flag enabled. Does not currently work [https://issues.chromium.org/issues/40781325](). Hopefully someone will continue the work on the prototype!

### How to handle browsers that don't support @custom-media
postcss has a plugin [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media) that converts your @custom-media rules into regular @media queries for example

```css
@custom-media --mobile (max-width: 400px);

@media (--mobile) {
    body {
        padding: 1rem;
    }
}

/* Becomes */
@media (max-width: 400px) {
    body {
        padding: 1rem;
    }
}
```