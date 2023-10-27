---
author: Leo Wang
pubDatetime: 2023-10-26
title: TAMID Web Dev Workshop
postSlug: tamid-web-dev-2023-fall
featured: false
draft: false
tags:
  - university
  - tamid
ogImage: ""
description: The web dev workshop in fall 2023
---

Web development plays a crucial role in the modern digital landscape. In this blog, we will explore the importance of web development, what it entails, and dive deeper into some key concepts.

## Importance of Web Development

1. Websites Still Account for a Lot of Software Development Projects
   - Despite the rise of mobile applications and other technologies, websites continue to be a significant part of software development. Businesses and individuals rely on websites to showcase their products, offer services, and provide information.
   - Web development skills are in high demand, making it a valuable area of expertise for developers seeking job opportunities.
2. Transferable Skills
   - Web development skills can be directly or indirectly transferred to other areas of development, such as mobile app development or full-stack development. Understanding the fundamentals of web development sets a strong foundation for branching out into other domains.
3. Easy to Find Jobs
   - Due to the widespread use of websites across various industries, there is a constant need for skilled web developers. Job prospects in web development are abundant, offering a range of opportunities for aspiring developers.

## What is Web Development?

1. It's More than Just HTML, CSS & JS
   - While HTML, CSS, and JavaScript are vital components of web development, there is much more to it. Web development involves understanding the client-server architecture, handling server-side programming, and utilizing various frameworks and libraries.
   - A website's functionality and interactivity go beyond the static HTML, CSS, and JavaScript files.
2. Understanding the Client-Server Interaction
   - When you visit a website, there is a process that takes place involving a client (your web browser) and a server (hosting the website). It's important to grasp the concepts of how these two entities communicate and exchange data.
   - On the client side, HTML, CSS, and JavaScript are responsible for rendering and providing interactivity to the user interface.
   - On the server side, programming languages like JavaScript (with Node.js) handle server logic and database interactions.
3. Exploring Next.js Basics [Next.js in 100 seconds](https://youtu.be/Sklc_fQBmcs?si=NCnlUAQ7LP5n-g44)
   - Next.js is a powerful framework for building React applications. It acts as a compiler and module bundler, making it easier to develop and deploy web applications.
   - Getting started with Next.js involves setting up your project using npm and understanding the file structure of a Next.js application.

Let's try out Next.js! First, make sure you have `node` and `npm` installed on your computer. Check by running `node --version && npm --version`. If not you can install it on your computer with the package manager of your choice or go to [Node.js website](https://nodejs.org/en).

Pull this GitHub repository down from [here](https://github.com/ImPrankster/tamid-web-dev-nextjs).

Navigate into the folder in your terminal and run `npm install`. npm stands for Node Package Manager. It is a package manager for the JavaScript programming language. It is used to install, share, and distribute packages or modules of code that developers can use in their projects. npm is the default package manager for Node.js, a popular JavaScript runtime environment.

After the installation is complete, run `npm run dev` to start the development server. You should see a message like this:

```bash
ready - started server on http://localhost:3000
```

Open up your browser and go to `http://localhost:3000`. You should see a page with "Hello World!".

Next.js file structure:

```bash
.
├── README.md
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── jsconfig.json
├── public
└── src
    └── pages
        ├── _app.js
        ├── _document.js
        ├── index.js
    └── styles
        └── global.css
```

- `pages` folder contains all the pages of your application. Each file in this folder is treated as a page. For example, `index.js` is the home page of your application.
- `_app.js` is the root component of your application. It is used to initialize pages.
- `_document.js` is used to modify the initial HTML document that is rendered to the user.
- `styles` folder contains all the styles for your application.
- next.config.js is used to modify the default Next.js configuration.
- `jsconfig.json` is used to configure how JavaScirpt code are compiled.
- `package.json` is used to manage dependencies and scripts for your application.

Edit index.js to change the content of the home page. You should see the changes reflected in your browser.

Try different headings, paragraphs, a tags and images.

The `src` for the image is relative to the `public` folder. So if you want to add an image, you can put it in the `public` folder and use it like this.

```jsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <a href="https://google.com">Google</a>
        <p>This is my first website</p>
        <img src="/yoshi_dino.jpg" width={500} />
      </main>
    </>
  );
}
```

You can also edit the `global.css` file to change the styles of your application.

## Diving Deeper into HTML, CSS & JS

1. HTML - The Structure of the Web [HTML in 100 seconds](https://youtu.be/ok-plXXHlWw?si=cMtKTKKyManmwo8-)
   - HTML (Hypertext Markup Language) is the foundation of web pages. It defines the structure and content of a webpage using tags to mark up elements.
   - Understanding HTML tags and their proper usage is essential for building well-structured web pages.
   - Reference [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
   - The code you wrote in your next.js project is not HTML. It is JSX. JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. It is not HTML, but it looks like HTML. It is compiled to JavaScript before being served to the browser.
2. CSS - The Style of the Web [CSS in 100 seconds](https://youtu.be/OEV8gMkCHXQ?si=mZMvKQ_h9uXONG-8)
   - CSS (Cascading Style Sheets) is responsible for the visual presentation of web pages. It allows developers to control the layout, colors, fonts, and other visual aspects of a website.
   - Mastering CSS empowers developers to create visually appealing and user-friendly web designs.
   - Reference [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
3. JS - The Brain of the Web [JavaScript in 100 seconds](https://youtu.be/DHjqpvDnNGE?si=qRSmUVgUC4DpogLL)
   - JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web pages. It enables developers to create interactive features, handle user input, and manipulate page content in real-time.
   - Understanding JavaScript is crucial for implementing complex functionality and creating engaging web experiences.
   - Reference [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

In conclusion, web development is a vital discipline that offers numerous opportunities for developers. It encompasses various technologies, concepts, and skills, making it an exciting and ever-evolving field to explore.
