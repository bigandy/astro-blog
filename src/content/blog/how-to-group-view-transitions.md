---
title: "How to Group View Transitions"
date: 2024-12-20
draft: false
description: ""
tags: ["css", "view-transitions"]
author: "Andrew"
---

I am currently learning about view-transitions with CSS in great detail.

I wanted to be able to select all the view transitions of a similar type e.g. in this case all of the headers.

The problem I had was that all of the headers need a unique view-transition-name so that the browser knows which header to animate to where. If all have the same name it cannot do this and the element transition won't work.

```html
<header style="view-transition-name=header-1">...</header>
<header style="view-transition-name=header-2">...</header>
<header style="view-transition-name=header-3">...</header>
<header style="view-transition-name=header-4">...</header>
<header style="view-transition-name=header-5">...</header>
```

If you wanted to be able to select all of these 5 headers you would need to:

```css
html::view-transtion-group(header-1),
html::view-transtion-group(header-2),
html::view-transtion-group(header-3),
html::view-transtion-group(header-4),
html::view-transtion-group(header-5) {
    animation-duration: 333ms;
}
```

One line per unique view-transition-name. Not possible for multiple view-transition-names, especially when they are generated based on the content.

For this site I am generating the view-transition-name based on the slug of the blog post. This means that by default all of the view-transition-names will be unique, and also that they cannot be placed into the CSS without an alternate build step. But it brings a problem when doing more complex work with the view transitions api. Targetting all of the headers to be able to control the way the headers animate between the new and the old views.

I needed to find another way!

### view-transition-class to the rescue!

After watching this excellent video about View Transitions by Bramus on the Google Chrome team: https://www.youtube.com/watch?v=eY6C_-aDdTo my eyes noticed the view-transtion-class attribute;

Each header still needs a unique view-transition-name as above but with `view-transition-class` you can target all of the headers.

Still the same HTML:

```html
<header style="view-transition-name="header-1">...</header>
<header style="view-transition-name="header-2">...</header>
<header style="view-transition-name="header-3">...</header>
<header style="view-transition-name="header-4">...</header>
<header style="view-transition-name="header-5">...</header>
```

With view-transition-class you can group these with CSS:

```css
header {
    view-transition-class: header-vt;
}
```

Then target with CSS:

```css
html::view-transition-group(.header-vt) {
    animation-duration: 333ms;
}
```
