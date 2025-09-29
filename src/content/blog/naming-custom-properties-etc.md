---
title: "CSS Custom Ident"
date: 2025-08-29
draft: true
description: ""
tags: ["css", "web dev"]
author: "Andrew"
template: "full-page"
---

Picture the scene. You are looking at a css codebase with a bunch of dashed custom idents:

```css
color: var(--color-1);
anchor-name: --box-1;
color: --hot-cold(true);
@apply --derp(32);
animation-name: --thingy;
```

what the hell do all of these things do and what will the end product look like?

In CSS we can use custom ident to name things, as functions, as mixins (coming soon), as anchor-names, animation-names. But without any naming convention it is pretty difficult to get a grasp what they actually do without going through the code top to bottom to see where they are defined and how they have been used elsewhere.
