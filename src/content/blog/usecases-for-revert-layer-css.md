---
title: "CSS revert-layer usecase(s)"
date: 2025-09-02
draft: true
description: ""
tags: ["css", "web dev"]
author: "Andrew"
template: "full-page"
---

What is revert-layer in CSS and when should you use it?

I remember that sometime earlier in the year I had an excellent usecase for using reset-layer.

I cannot find the code anywhere on Codepen but that is probably because their search is not good enough for trolling through all of the CSS that I have written.

So I will need to recreate an example!

```css
// Define the layers up front and thus define the "order"
@layer one, two, three;

@layer two {
    h1 {
        color: red;
    }
}

@layer three {
    h1 {
        color: white;
        background: black;
    }

    h1:hover {
        all: revert-layer;
    }
}
```
