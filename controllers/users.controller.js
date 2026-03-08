const Users = require("../models/users.model");

const path = require("path");

exports.getUsers = (request, response, next) => {
  const users = Users.fetchAll();
  response.render("users/index", { users: users, title: "Users" });
};

exports.getNewUser = (request, response, next) => {
  response.render("users/new", { title: "New User" });
};

exports.postNewUser = (request, response, next) => {
  const user = new Users(request.body.name, request.body.description);
  user.save();
  response.setHeader("Set-Cookie", `lastUser=${user.name} Secure`);
  response.redirect("/users");
};