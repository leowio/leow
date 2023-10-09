---
author: Leo Wang
pubDatetime: 2023-04-14
title: Book Master
postSlug: book-master
featured: false
draft: false
tags:
  - project
ogImage: ""
description: In this project we created a web scraper using python, various API endpoints, and a website displaying the data.
---

## Project overview

[Deployment Link](https://book-master.leow.io/) [GitHub Link](https://github.com/ImPrankster/book-master)

_This project is part of the application to TAMID Global to establish Shanghai Tech Track_, In this project we created a web scraper using python, various API endpoints, and a website displaying the data.

![Photo of Book Master Website](https://res.cloudinary.com/leow/image/upload/f_auto,q_auto/v1/blog/portfolio/aa3cda96a232d71b09f9d9ee07671909_qvl3lb)

## Tech Stack

This website is built with [TypeScript](https://www.typescriptlang.org/) + [Next.js](https://nextjs.org/) + [Supabase](https://supabase.com/) + [Tailwind CSS](https://tailwindcss.com/).

[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript with type syntax, it allows us to develop software that is more type-safe. Being type-safe means our software is less prone to errors, and it also means we can leverage the auto-completion feature present in most modern code editors.

[Next.js](https://nextjs.org/) is a meta-framework built on top of [React](https://react.dev/) that allows you to render web pages on the server, which is exactly what we need as our project do not need to fetch data dynamically on the client side. Leveraging server-side rendering gives us blazing fast load time. React is a popular open-source JavaScript library used for building user interfaces for web and mobile applications. It allows developers to create reusable UI components and efficiently update the UI in response to changes in data, without the need for manually manipulating the DOM. Using React allows us to build our website with minimal boiler plate and code repetition.

[Supabase](https://supabase.com/) is a serverless database solution similar to [Firebase](https://firebase.google.com/), but uses [PostgresSQL](https://www.postgresql.org/) as its backend that allows a similar experience to operating SQL databases (in respect to noSQL databases Firebase uses) as well as a more type-safe way to store data. Serverless means we don't have to worry about maintaining a server environment.

[Tailwind CSS](https://tailwindcss.com/) is a CSS framework that contains many utility classes which you can use out-of-the-box. We also paired it with [Daisy UI](https://daisyui.com/) to leverage more carefully-designed utility classes. This allows us to build a beautiful & responsive UI system amazingly fast.

## How did we build it

### How data are stored

The first thing we need to do is having a place to store our data. We started by creating a Supabase project, then created a SQL table called book. Each book is represented as a column on the table, which has rows like `title` `description` `categories`, etc.

Details about how we use the web scraper to insert the data can be found at it's regarding repository

### Website structures

Visit [Book Master](https://book-master.leow.io/) to check out our work.

After the table is populated with the data we want to show on the website and expose to the API, we started to work on the website. It has a landing page that shows recently added books, and a categories page that shows all the categories you can browse through.

The categories page used a Postgres View to fetch all the categories present in the database, and if you click into the inner page of each category, you can see all the books under the category.

The book details page used a dynamic route to fetch data using the upc number provided in the url, because the upc number is unique, we can be sure the data we fetched is unique.

### API end points

Next.js provided us easy solutions to create a API endpoint within our web app. We used a search param in the URL to provide us with the information to fetch data from the database. It supports both fetching by UPC and fetching by Category

You can use these command in a terminal `curl https://book-master.leow.io/api?upc=<upc>`
or `curl https://book-master.leow.io/api?category=<category>`

### Deploying on Vercel

Vercel is a serverless service provider with great support for GitHub integration. It auto re-build the web app every time we pushed new changes to the repository. It also runs on a edge network so our website is fast no matter where we access it.

## How to deploy your own Book Master website

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [https://book-master.leow.io/api](https://book-master.leow.io/api). This endpoint can be edited in `pages/api/route.ts`.

You'll need to also setup a Supabase project and a table containing the same structure as found in `@/utils/types/supabase.ts` and add your Supabase URL and Supabase anon key to a .env.local file
