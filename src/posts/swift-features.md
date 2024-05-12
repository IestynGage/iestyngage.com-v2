---
tags: post
title: Iestyn Gage
layout: "blog.njk"
metaDescription: "Iestyn Gage; Software Engineer; blog; swift"
blogTitle: The "I don't care about this" character
date: 2024-05-04
published: 04/05/2024
dayMonth: 04/05
---

It's been a while since I've used Swift, but they are two features I particularly love that I wish I saw in more languages.

```swift
func foo(inputA:String, inputB:String) -> String {
  return "foo"
}
...
let z = foo(inputA: "foo", inputB: "bar")
```
<p>
You may say "That looks tedious, wouldn't you eventually get tired of that?"
But that's where my favourite part of the language comes in, the "I don't care about that" character.
It's just a '_'.
</p>

<p>
You can use it turn stop supplying labels to functions.
<p>

```swift
func foo(_ inputA:String,_ inputB:String) -> String {
  return "foo"
}
...
let z = foo("foo", "bar")
```

<p>
You can use it for switch cases.
<p>

```swift
switch (foo, bar) {
    case ("foo", "foo"):
        print("foo")
    case ("bar", "bar"):
        print("bar")
    case (_, "fooBar"):
        print("fooBar")
    default:
        print("Default")
}
```

<p>
You can use it for closures, which is god dam useful and why I love this feature so much.
<p>

```swift
func foo(f: (_ p:String,_ i:String) -> String) {
    let value = f("foo", "boo")
}
...
foo(f: {(p: String, _) in "Hello" + p })
```

<p>
And god dam does it make reading closures/lambda/callbacks a lot easier. 
My main problem with closures is that when I'm working on existing closures; 
it's not my first port-of-call to look if another closure with an extra parameter exists.
This occasionally means I do something idiotic where the closures is calculating some value that is already being supplied.
This is specially problematic in JavaScript/TypeScript where your supplying theses to a third part library component.
</p>

<p>
It's small, it's nifty, it makes reading code easier and I wish more languages had this feature.
</p>