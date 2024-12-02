---
pubDatetime: 2024-04-15
title: Getting Started with React
postSlug: getting-started-with-react
tags:
  - web dev
  - workshop
  - university
  - tamid
description: A workshop for beginners to learn the basics of React.
---

## First, what is React?

React is a JavaScript library for building user interfaces. It allows interactivity and reusability to be easily achieved in web development where it used to be hard. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

## Why React?

The old way of building web applications was to use jQuery (or, vanilla JS) to manipulate the DOM. This was a pain because it was hard to keep track of what was going on in the application.

Below is an example of a simple counter application using jQuery:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Counter App</h1>
      <div class="counter">0</div>
      <button id="increment">Increment</button>
      <button id="decrement">Decrement</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

```javascript
$(document).ready(function () {
  let count = 0;

  // Display initial count
  $(".counter").text(count);

  // Increment count
  $("#increment").click(function () {
    count++;
    $(".counter").text(count);
  });

  // Decrement count
  $("#decrement").click(function () {
    if (count > 0) {
      count--;
      $(".counter").text(count);
    }
  });
});
```

Or, in vanilla JS:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const counterDisplay = document.querySelector(".counter");

  // Display initial count
  counterDisplay.textContent = count;

  // Increment count
  document.getElementById("increment").addEventListener("click", function () {
    count++;
    counterDisplay.textContent = count;
  });

  // Decrement count
  document.getElementById("decrement").addEventListener("click", function () {
    if (count > 0) {
      count--;
      counterDisplay.textContent = count;
    }
  });
});
```

Now what if we use React?

```jsx
// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
```

You might notice a few things:

- Declarative vs imperative: React is declarative. You declare what you want to happen, and React takes care of the rest. You don't have to worry about how the DOM is being manipulated.

- Single source of truth: In the jQuery example, the count is stored in the DOM. In the React example, the count is stored in the component state. This makes it easier to keep track of what's going on in the application.

These look extremely cool, right? Let's get started with React!

## Setting up a React project

A framework? A Library? What's the difference?

- A library is a collection of functions that you can call, these functions will perform some operations, but they will not dictate the structure of your application.
- A framework is a collection of libraries that will dictate the structure of your application.

React is a library, not a framework. It is a view library that allows you to create components that can be reused and composed together to build complex user interfaces. However, React is often used with other libraries and tools to form a framework.

In this workshop, we will use Next.js, a framework built on top of React.

Create a new repo in your GitHub account with this template: <https://github.com/ImPrankster/react-workshop>

Clone your repo to your local machine, and start the development server:

```bash
git clone url
cd repo-name
npm install
npm run dev
```

Now you can open your browser and go to <http://localhost:3000> to see your React app.

## Project structure

```plaintext
.
├── .gitignore
├── README.md
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
    └── pages
        ├── _app.js
        ├── _document.js
        ├── index.js
    └── styles
        └── global.css
```

- `pages`: This is where you will create your pages. Each file in this directory will be a route in your app, except for files that start with an underscore (they help load React and Next).
- `styles`: This is where you will put your style files.
- `node_modules`: This is where all your dependencies are installed (this folder is ignored in git).

## Task 1: finish the counter in `src/pages/index.js`

You will see an unfinished counter app in your browser. Your task is to finish the counter app by creating the increment and decrement function.

_Q1: can you just add to a variable in the function?_

## Core concept 1: States

States are the way React determines how to update your UI. When a state changes, React will re-render the component.

First, import `useState` from react.

```jsx
import { useState } from "react";
```

Calling `useState` will return an array with two elements: the current state and a function to update the state.

```jsx
const [count, setCount] = useState(0);
```

Now we can finish the counter.

## Task 2: add a framework info page

Create a new file in `src/pages` called `frameworks.js`. This page should display information about various frameworks.

We have the info about different frameworks here:

```javascript
const Frameworks = [
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    img: "https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2022-11%2Fnextjs-13.png&w=3840&q=50",
  },
  {
    name: "Svelte",
    url: "https://svelte.dev/",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*G9fzmaoymDGy7scbkgpC7A.png",
  },
  {
    name: "Ember",
    url: "https://emberjs.com/",
    img: "https://lh3.googleusercontent.com/xiJT_JYT1wV86sw7nZl-H4EekNRj798Fa6rdGpbM5ky4wJno3YRhupT3nxekDI5vIoNTOeQZdT0gCSBRgsG3hx_BJTQ_EBxhbB5P6-6JuqxrCqR5BT1SDmYzIa8QabodFs03oWj8",
  },
  {
    name: "Preact",
    url: "https://preactjs.com/",
    img: "https://swansoftwaresolutions.com/wp-content/uploads/2018/04/preact-2.png",
  },
  {
    name: "Solid",
    url: "https://www.solidjs.com/",
    img: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/solidjs.png?fit=1800%2C900&ssl=1",
  },
  {
    name: "Vue",
    url: "https://vuejs.org/",
    img: "https://img-b.udemycdn.com/course/750x422/5157066_66bb.jpg",
  },
  {
    name: "Angular",
    url: "https://angular.io/",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--iJZBBAvk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6doxxhpppvzoxdbv0do6.png",
  },
];
```

Also, we have the page layout for you:

```jsx
const FrameworksPage = () => {
  return (
    <main className="main-container">
      <h1>Famous Web Frameworks</h1>
      <p>
        There are a lot of different web frameworks out there, what should I
        choose?
      </p>
      <p>
        If you want a well-supported, performent, and well-documented framework,
        you can't go wrong with
      </p>
      {/* What to put here? */}
      <p>
        If you want a web framework with a cute mascot, amber has a cute hamster
      </p>
      {/* What to put here? */}
      <h1>Web Frameworks:</h1>
      <div className="framework-grid">{/* What to put here? */}</div>
    </main>
  );
};
```

## Core concept 2: Components

Components are the building blocks of a React application. They are reusable pieces of code that can be composed together to build complex user interfaces.

In React, components are just functions that return JSX. Remember to export your component so you can use it in other files.

Add a `components` folder in `src` and create a new file called `FrameworkCard.js`.

```jsx
const FrameworkCard = () => {
  return <h1>Hello, world!</h1>;
};
```

Components can also take props as arguments.

```jsx
const FrameworkCard = ({ name, url, img }) => {
  return (
    <div className="framework-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <a href={url}>Learn more</a>
    </div>
  );
};
```

Now we can finish the `FrameworkCard` component.

```jsx
const FrameworkCard = ({ name, url, img }) => {
  return (
    <span className="framework-card">
      <img src={img} alt={name} />
      <div className="framework-info">
        <p>{name}</p>
        <a href={url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </span>
  );
};

export default FrameworkCard;
```

To use the `FrameworkCard` component in `frameworks.js`, import it at the top of the file.

```jsx
import FrameworkCard from "../components/FrameworkCard";
```

Now you can use the `FrameworkCard` component in the `FrameworksPage` component.

```jsx
<Framework
  name={Frameworks[0].name}
  url={Frameworks[0].url}
  img={Frameworks[0].img}
/>
```

How do we display all the frameworks in the array?

## Core concept 3: Array methods

JavaScript has a lot of built-in array methods that can help you manipulate arrays. Some of the most common ones are `map`, `filter`, and `reduce`.

Here we will use map to create list of `FrameworkCard` components.

```jsx
<div className="framework-grid">
  {Frameworks.map((framework) => (
    <FrameworkCard
      key={framework.name}
      name={framework.name}
      url={framework.url}
      img={framework.img}
    />
  ))}
</div>
```

`key` is a special prop that React uses to keep track of which elements have changed, been added, or been removed. It should be unique for each element in the array.

Now we have finished the Framework info page.
