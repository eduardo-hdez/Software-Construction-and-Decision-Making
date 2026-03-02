const express = require("express");
const fs = require("fs");
const router = express.Router();

// HTML
const htmlHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 11 - Express</title>
</head>
<body>

<header>
    <h1>Tasks</h1>
</header>
`;

const htmlForm = `
<form action="/tasks/new" method="POST">

    <label for="title">Title:</label>
    <input type="text" id="title" name="title" required>
    <br><br>

    <label for="description">Description:</label>
    <input type="text" id="description" name="description" required>
    <br><br>

    <button type="submit">Save Task</button>

</form>
`;

const htmlFooter = `
<footer>
    <p>Lab 11 - Express</p>
</footer>

</body>
</html>
`;

// Data
const tasks = [
  {
    title: "Do the lab",
    description: "Do lab11 from last class",
  },
  {
    title: "Do automata homework",
    description: "Do automata homework from last week",
  },
];

// Middleware
router.use((request, response, next) => {
  console.log("Tasks middleware!");
  next();
});

router.get("/new", (request, response, next) => {
  response.send(htmlHeader + htmlForm + htmlFooter);
});

router.post("/new", (request, response, next) => {
  tasks.push(request.body);
  fs.appendFileSync("tasks.txt", `${request.body.title}, ${request.body.description}\n`);
  response.redirect("/tasks");
});

router.use((request, response, next) => {
  console.log("Another tasks middleware!");
  let htmlIndex = `
    <a href="/tasks/new"><button>New task</button></a>
    <div>`;

  for (let task of tasks) {
    htmlIndex += `
      <div>
        <h2>${task.title}</h2>
        <p>${task.description}</p>
      </div>`;
  }

  htmlIndex += `
    </div>`;

  response.send(htmlHeader + htmlIndex + htmlFooter);
});

module.exports = router;
