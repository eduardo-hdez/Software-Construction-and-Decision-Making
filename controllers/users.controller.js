exports.getLogin = (request, response, next) => {
  response.render("login", { title: "Login" })
};

exports.postLogin = (request, response, next) => {
  request.session.username = request.body.username;
  response.redirect("/tasks");
};

exports.getLogout = (request, response, next) => {};