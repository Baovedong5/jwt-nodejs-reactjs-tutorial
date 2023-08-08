import { createNewUser, getUserList } from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // createNewUser(email, password, username);
  getUserList();

  return res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
};
