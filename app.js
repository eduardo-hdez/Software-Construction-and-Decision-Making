const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const routeUsers = require("./routes/users.routes.js");
app.use("/users", routeUsers);

const routeTasks = require("./routes/tasks.routes.js");
app.use("/tasks", routeTasks);

app.use((request, response, next) => {
  response.status(404).send("This page does not exist");
});

app.listen(3000);
