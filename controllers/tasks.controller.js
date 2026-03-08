const Tasks = require("../models/tasks.model");

const path = require("path");

exports.getTasks = (request, response, next) => {
  console.log(request.params.id);
  Tasks.fetch(request.params.id).then(([rows, fieldData]) => {
    return response.render("tasks/index", {
      title: "Tasks",
      username: request.session.username || "",
      tasks: rows,
    });
  }).catch(error => {
    console.log(error);
    throw error;
  });
};

exports.getNewTask = (request, response, next) => {
  response.render("tasks/new", {
    title: "New Task",
    username: request.session.username || "",
  });

};

exports.postNewTask = (request, response, next) => {
  const task = new Tasks(request.body.title, request.body.description);
  task.save().then(() => {
    return response.redirect("/tasks");
  }).catch(error => {
    console.log(error);
    throw error;
  });
};
