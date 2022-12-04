---
tags: post
title: Iestyn Gage
layout: "blog.njk"
metaDescription: "Iestyn Gage; Software Engineer; blog; inline javascript anchor element"
blogTitle: Ah yes let's inline JS in the anchor element
published: 04/12/2022
---

<p>
You can inline javascript in the href attribute, (you have to prefix the code with `javascript:`).
I was in disbelieve when I discovered this.
I don't know why anyone would ever use this feature instead of, ya know a button?
But now you know you can.
The pain in the ass implincation of this is that users can post dangerous "links" that can run javascript on other clients.
</p>
<br/>
<p>
If you don't believe me click the example below.
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
