---
title: "Experimenting on the bleeding edge in Chrome Canary with command line Feature Flags"
date: 2025-05-13
draft: false
tags: [""]
---

- I am following the work on a prototype of a new CSS feature that will enable the ability to know which direction the user is scrolling a scrollport _aka_ [Support scroll direction in @scroll-state](https://issues.chromium.org/issues/414556050)

- I quickly created a codepen demo and I repeatedly checked Chrome Canary but I could not make my code work.

- I realised that to be able to use it the browser needed a special command line feature flag to enable it.

- There are a number of levels of **status** that a feature can have when being prototyped: `Test`, `Experimental`, and `Stable`. `Test` is where the code is so new that to use it you need to use a command line flag. `Experimental` is also under a feature flag but this time a more general "Experimental Web Platform Features" which is available to the user in chrome://flags e.g. chrome://flags/#enable-experimental-web-platform-features. The final level is `Stable` where the feature does not need any flag and is ready to be shipped.

- I looked in https://raw.githubusercontent.com/chromium/chromium/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5 and did a search for `direction`.

- The feature flag I wanted was `CSSScrollDirectionContainerQueries` and in my terminal on MacOS I typed:

```bash
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --enable-features=CSSScrollDirectionContainerQueries
```

## Writing a custom zsh function to open canary with specified command line feature flags

I am using ZSH and instead of remembering all of the above each time I want to open Canary I have created a function into which I can pass the flag name(s):

```bash
function openCanary() {
	/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --enable-features="$1";
}
```

and then use `openCanary CSSScrollDirectionContainerQueries` or even `openCanary CSSScrollDirectionContainerQueries,CSSMixins` if I wanted to use CSSMixins and CSSScrollDirectionContainerQueries flags.

## Debugging

If it is not working you will want to check it is not conflicting with other flags. To do this you can go to chrome://version

## Notes

https://chromium.googlesource.com/chromium/src/+/main/third_party/blink/renderer/platform/RuntimeEnabledFeatures.md
