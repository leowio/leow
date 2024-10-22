---
pubDatetime: 2024-10-14
title: I tried Swift
postSlug: i-tried-swift
tags:
  - programming
  - swift
description: I tried to learn Swift and here are my thoughts
---

## My introduction to Swift / SwiftUI

I am taking a course on iOS Development and as we know, Swift is the programming language used for iOS development. I've been playing around with Swift, and I've been loving it so far.

## What is it to love about Swift?

Coming from a JavaScript background, I love how Swift is designed from the ground up to be a safe and feature-rich language.

### Strong typing

I have always appreciated the strong typing brought by TypeScript, it makes you move fast and safely. Thankfully, Swift is designed to be a strongly typed language, which means you can be sure that the data you are working with is of the correct type.

### Optionals and error handling

Swift provides great syntax sugar for handling optionals and errors. I particularly like `try?` and `try!`, which allow you to convert errors into optionals. This makes your code more expressive and easier to read.

### SwiftUI

Before I learned Web Dev, I dabbled in iOS development for a little bit of time. The reason It didn't click for me was how UIKit is a pain to work with. Switching to doing React & other Web frameworks was a much better experience, they are declarative and fun to work with. Now SwiftUI brought a lot of the benefits of the declarative approach to iOS development.

### Data Binding

Data binding is - although it could be dangerous - it can simplify how you build your UI (If you know what you are doing).

## What is it to not love about Swift?

### Language Server

The language server _sucks_, it's slow and crashes often.

### Previewablity

I know for a compiled language, Apple had tried hard to make SwiftUI previewable. But coming from a JavaScript background, I miss the hot module replacement and the ability to see the changes in real time.

### Decorators

Decorators are not a good idea...

### Styling

There are a lot of hidden styling in SwiftUI, and the ways you can style things are not very consistent or intuitive.

e.g. When you use a `List`

Doing this:

```swift
List {
}
.background(.red)
```

Does not work, but this does:

```swift
List {
}
.scrollContentBackground(.red)
```

## Ok, what's the conclusion

I think Swift is a very exciting language. Weirdly I think it has great potentials outside of iOS development as a high-performance & safe language. We are seeing its adoption in apps like Arc or Ladybird. And I think SwiftUI is a great step forward, but still has a lot of room for improvement.
