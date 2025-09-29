---
title: "Custom Media and Container Queries!"
date: 2025-09-12
draft: true
description: ""
tags: ["css", "web dev"]
author: "Andrew"
template: "full-page"
---

I have always wanted the ability to set a media query check and be able to update the query at another time.

For example:

```css
.box {
    --query: 300px;
    background: red
    @media (width > var(--query)) {
        background: green;
    }
}

/* Update the value of the query at a later stage responding to some action */
.box.active {
    --query: 500px;
}
```

but this has not been possible.

## Introducting style range queries

For the last couple of years you've been able to write some custom @container style queries, but only checking against the value of the custom variable.

```css
:root {
    --value: 1;
}

@container style(--value: 1) {
    body {
        background: orange;
    }
}

@container style(--value: 2) {
    body {
        background: green;
    }
}
```

but with container style range queries it got a whole lot better. Now you're able to do mathematical comparisons against these custom variables.

```css
:root {
    --index: 5;
}

@container style(--index > 3) {
    body {
        background: purple;
    }
}
```

## Introducing if()

This gives you the ability to write inline media/container style/supports queries.

For example:

```css
body {
    background-color: if(media(width > 600px): green; else: red;);
}
```

You are also able to use the variables defined on the element in style queries using if():

```css
body {
    --check: 3;

    background-color: if(
        style(--check: 3): green; style(--check > 3): orange; else: red;
    );
}
```

## Introducing @function

You're now able to write some custom CSS functions:

```css
@function --double-it(--value) {
    result: calc(var(--value) * 2);
}

h2 {
    font-size: --double-it(14px);
}
```

and if you combine with the if() it is possible to do some custom media or style queries:

```css
@function --custom-mq(--test, --if-true, --if-false) {
    result: if(
        style(100vw > var(--test)): var(--if-true) ; else: var(--if-false) ;
    );
}

body {
    background-color: --custom-mq(600px, green, red);
}
```
