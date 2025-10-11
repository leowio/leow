---
pubDatetime: 2023-11-14
title: Web request in Next.js
postSlug: web-request-in-next-js
tags:
  - nextjs
  - web dev
  - workshop
  - university
  - tamid
description: Requesting external source is a common task in web development. In this workshop, we will learn how to fetch data in Next.js.
marp: true
theme: gaia
class: invert
---

<!-- _class: lead -->

# Web Request in Next.js

---

## What is web request?

- You need to update your web page with data from an external source
- You need to post data to an external source
- Basically anything that happens on the Internet

---

## Different ways of client-server communication

- **Protocol**: a set of rules that governs how data is transferred between two parties
  - HTTP: HyperText Transfer Protocol
  - HTTPS: HTTP + Secure
  - WebSockets: a protocol that allows for two-way communication between client and server

---

## Restful API

Built on top of HTTP/s protocol.

- **REST**: Representational State Transfer
- **Stateless**: Server does not keep track of client's state

When a client request is made via a RESTful API, information is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines.

---

## Try it out

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

```javascript
const response = await fetch("https://www.boredapi.com/api/activity");
```

## But what is `await`?

---

## Asynchronous programming

- **Promises**
  - A promise is an object that may produce some value some time in the future (e.g. a web request, reading files, some expensive computation, etc.)
  - Two ways to handle a promise:
    - [callback method](https://www.w3schools.com/js/js_promise.asp)
    - [`async`/`await` keywords](https://www.w3schools.com/js/js_async.asp)

---

## More about requests

- URL: Uniform Resource Locator
- method: `GET`, `POST`, `PUT`, `DELETE`
- headers: metadata about the request (cookies, authentication, etc.)
- body: data to be sent to the server

---

## More about responses

- [Status code: 200, 404, 500, etc.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Response body: data sent back from the server (JSON, HTML, etc.)

---

## Do you know JSON?

```json
{
  "firstName": "Duke",
  "lastName": "Java",
  "age": 18,
  "streetAddress": "100 Internet Dr",
  "city": "JavaTown",
  "state": "JA",
  "postalCode": "12345",
  "phoneNumbers": [{ "Mobile": "111-111-1111" }, { "Home": "222-222-2222" }]
}
```

---

## Building a RESTful API in Next.js

- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- handling requests using `req` object
- sending responses using `res` object

```javascript
export default function handler(req, res) {
  if (req.method === "POST") {
    req.body.name === "" && res.status(401).json({ error: "Missing name!" });
    res.status(200).json({ msg: `Hello, ${req.body.name}` });
  } else {
    res.status(200).json({ msg: "Hello" });
  }
}
```

---

## Cool JavaScript fact

`&&` is a short-circuit operator. It evaluates the second operand only if the first operand evaluates to `true`.

---

## Sending data using `fetch`

```javascript
const response = await fetch("/api/hello", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: text }),
});
```

`JSON.stringify` converts a JavaScript object to a JSON string.

---

Check if the response is successful:

```javascript
if (!response.ok) {
  return {
    code: response.status,
    error: await data.error,
  };
}
return {
  code: response.status,
  msg: data.msg,
};
```

---

## Resources

- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Synchronizing with Effects in React](https://react.dev/learn/synchronizing-with-effects)
- [Advanced query tools: TanStack Query](https://tanstack.com/query/latest)
