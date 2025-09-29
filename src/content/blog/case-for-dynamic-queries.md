---
title: "The Case for dynamic queries"
date: 2025-09-13
draft: true
description: ""
tags: ["css", "web dev"]
author: "Andrew"
template: "full-page"
---

## What is a dynamic query?

For as long as I remember I have wanted to have a container or media query that accepts a variable for the breakpoint value. e.g. `@media (width > var(--mq-breakpoint)) {}` or `@container (width > var(--cq-breakpoint)) {}`.

You update the breakpoint variable if the query passes at that break point the code is applied. Simple in theory but not possible until now due to web standards and the csswg. But now I have found an approach that works. In Google Chrome Canary at least.

### Why?

#### Theming

Theming allows you to have different design and for each different design you might want a different breakpoint for each design. With the ability to pass a variable to the media or container query you can update the design specifically to that theme without defining a new media or container query specific to that theme.

#### Reacting to a user-set parameter(s)

If you allow your users to customise your site or app then having a dynamic query allows you to be able to define which breakpoints for the media or container queries.

## The approach

Combining several new web platform features: style range queries e.g. `@container style(--index > 10) {}` and the inline `if()` function to make a custom query that accepts variables.

### What is a style range query?

### What is an if() function?

Now that we have (in Chrome Canary) container style range queries and if() it is possible to do a custom range query:

```css
if(
    style(100vw > var(--width, 200px): <replace with code for when query passes>;
    else: <replace with code for when query fails>;
);
```

or a container query:

```css
if(
    style(100cqi > var(--container-width, 700px): <replace with code for when query passes>;
    else: <replace with code for when query fails>;
);
```

or with the help of a custom @function:

```css
@function --custom-range-test(--test <length>, --width <length>, --if, --else) {
    result: if(
        style(var(--test) >= var(--width)): var(--if) ; else: var(--else)
    );
}

/* and use */
:root {
    --mq-big: 1000px;
    --cq-medium: 500px;
    --cq-big: 750px;
}

/* for a media query */
body {
    --mq-test: var(--mq-big);
    background-color: --custom-range-test(100vw, var(--mq-test), green, red);
}

/* update media query for some reason */
body.active {
    --mq-test: 300px;
}

/* for a container query */
.component {
    --cq-test: var(--cq-medium);
    container-type: inline-size;

    .inner {
        font-size: --custom-range-test(100cqi, var(--cq-test), 2rem, 1rem);
    }
}

/* update the test if we've got a "featured" component */
.component.featured {
    --cq-test: var(--cq-big);
}
```

Now that this is possible, I think it would be very useful to have this functionality elsewhere e.g. mixins and actual media queries and container queries:

## Media and Container Queries

Not currently possible to do media or container queries with variables inside but it would be useful:

```css
@container style(100cqi > var(--test-width)) {
}

or @container (inline-size > var(--test-width)) {
}

or @media (width > var(--test-width)) {
}
```

## Mixins

What would be really useful would be the ability to be able to use this custom range query within a mixin e.g.

```css
@mixin --mq-grid-range(--range, @contents) {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @when(style(100vw > env(--range)) {
    /* styles for when the query matches */
    @contents;
  }
}

.card {
  @apply --mq-grid-range(500px) {
     grid-template-columns: repeat(5, 1fr);
     gap: 3em;
     border: 3px solid orange;
  }
}
```

### Fallback

Another idea would be to be able to provide a fallback if the @when wasn't matched but could need to be able to provide a fallback option somehow.

```css
@mixin --range-with-fallback(--range, @contents, @fallback-contents) {
  @when(style(100vw > env(--range)) {
    /* styles for when the query matches */
    @contents;
  }
  @else {
    /* fallback styles */
    @fallback-contents; /* ?? */
  }
}

.card {
  @apply --range-width-fallback(1200px, {
     <@contents style block>

  }, {
     <@fallback-contents style block>
  });
}
```

## How to test for custom range queries

This is a work in progress but so far I have discovered you have to go about testing for custom range queries in a double pronged manor:

1. Test for the `if()` support with a @supports query

```css
@supports (background: if(media(width > 1px): red)) {
    /* "supports if query" */
}
```

2. Then inside this `if()` @supports query use a `@container style()` query:

```css
@style style(3>2) {
    /* style range query supported*/
}
```

so combining the two together you get

```css
@supports (background: if(media(width > 1px): red)) {
    /* "supports if query" */
    @style style(3>2) {
        /* Both if() and style range supported */
    }
}
```

You could write this as a custom function:

```css
@property --support {
    syntax: "true | false";
    inherits: true;
    initial-value: false;
}

@function --supports-style-range() {
    result: if(style(3 > 2): true);
}

:root {
    --support: --supports-style-range();
}

@container style(--support: true) {
    body {
        /* 	use style range query	 */
        background-color: if(style(100vw > 500px): deepPink; else: red);
    }
}
```
