---
tags: post
title: Iestyn Gage
layout: "blog.njk"
metaDescription: "Iestyn Gage; Software Engineer; blog; inline javascript anchor element"
blogTitle: Ah yes let's inline JS in the anchor element
date: 2024-01-02
published: 02/01/2024
dayMonth: 02/01
---

<p>
You can inline JavaScript in the href attribute, (you have to prefix the code with `javascript:`).
I was in disbelieve when I discovered this.
</p>
<p>
I don't know why anyone would ever use this feature instead of, ya know a button?
But now you know you can.
</p>
<p>
The implication of this is that users can post dangerous "links" that can run JavaScript on other clients.
</p>
<br/>

<a href="javascript:alert(`Hello world`)"> Alert example </a>
<br/>

<div>

```html
<a href="javascript:alert(`Hello world`)"> 
  Alert example 
</a>
```

</div>
