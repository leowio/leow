---
pubDatetime: 2024-04-22
title: More React!
postSlug: more-react
tags:
  - javascript
  - web dev
  - workshop
  - university
  - tamid
description: In this workshop we will review what we learned about react by doing a project and get started with async JavaScript.
---

## Project: To-do list (20min)

We will make a to-do list in React that can add tasks and mark tasks as completed.

Checkout the finished web page [here](https://tamid-web-dev-nextjs.vercel.app/todo)

Let's break it down step by step:

1. Assume we have an array of tasks, how do we display them on the page? _Hint: Use the `map` function_

2. There is an input box on the web page to get the user input of tasks, how do we read the input from the user? _Hint: the `onChange` event_

```javascript
<input
  type="text"
  placeholder="Add a todo"
  onChange={(event) => {
    /** Do something here **/
    // event.target.value will give you the value of the input
  }}
/>
```

3. To keep track of the user input, we need to store it in a state. How do we do that? _Hint: Use the `useState` hook_

4. How can we modify and keep track of the list of tasks? _Hint: Use another `useState` hook with arrays!_

5. How do we add a task to the list of tasks? _Hint: `array.concat()` function_

6. How do we mark a task as completed? _Hint: Use the `array.filter()` function to modify the tasks list_

```javascript
setTodoArr(
  todoArr.filter((_, todoIndex) => {
    return todoIndex !== index;
  }),
);
```

Extras:

7. How do we animate the component? I used [AutoAnimate](https://auto-animate.formkit.com/#installation), try to figure out how to use it!

Now that we have a to-do list, let's move on to the next topic.

## Requesting the Web

### What is web request?

- You need to update your web page with data from an external source
- You need to post data to an external source
- Basically anything that happens on the Internet

### Different ways of client-server communication

- **Protocol**: a set of rules that governs how data is transferred between two parties

  - HTTP: HyperText Transfer Protocol
  - HTTPS: HTTP + Secure
  - WebSockets: a protocol that allows for two-way communication between client and server

### Restful API

Built on top of HTTP/s protocol.

- **REST**: Representational State Transfer
- **Stateless**: Server does not keep track of client's state

When a client request is made via a RESTful API, information is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines.

### Try it out

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

```javascript
const response = await fetch("https://www.boredapi.com/api/activity");
```

### But what is `await`?

### Asynchronous programming

- **Promises**
  - A promise is an object that may produce some value some time in the future (e.g. a web request, reading files, some expensive computation, etc.)
  - Two ways to handle a promise:
    - [callback method](https://www.w3schools.com/js/js_promise.asp)
    - [`async`/`await` keywords](https://www.w3schools.com/js/js_async.asp)

_Why do we need asynchronous programming?_

Sending a request to a server takes time, and we don't want to block the main thread while waiting for the response.

### More about requests

```javascript
fetch("https://example.com/", {
  method: "GET",
  body: "Some data",
});
```

- URL: Uniform Resource Locator
- method: `GET`, `POST`, `PUT`, `DELETE`
- headers: metadata about the request (cookies, authentication, etc.)
- body: data to be sent to the server

### More about responses

- [Status code: 200, 404, 500, etc.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Response body: data sent back from the server (JSON, HTML, etc.)

### Do you know JSON?

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
