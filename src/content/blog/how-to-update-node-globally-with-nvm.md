---
title: "how to update node globally with nvm"
date: 2026-05-28
draft: false
tags: [""]
description: ""
bskyPostUri: "at://did:plc:v2g2eg4yqzdvaszx573z6hwi/app.bsky.feed.post/3mrrnib7gb22g"
---

Did you know that node 26 now supports the Temporal API for date manipulation?

I have been following the development process closely and found myself wanting to update to different versions of node.

```bash
nvm install 26.2.0
nvm alias default 26.2.0
```

If you use zsh you can create a function that does this in one line:

```bash
function updateNode() {
	nvm install "$1";
	nvm alias default "$1";
}
```

and use it like so:

```bash
updateNode 26.2.0
```