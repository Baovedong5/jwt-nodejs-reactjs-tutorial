import { createNewUser, getUserList, deleteUser } from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = async (req, res) => {
  let userList = await getUserList();
  await deleteUser(5);
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  createNewUser(email, password, username);

  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  await deleteUser(req.params.id);
  return res.redirect("/user");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
  handleDeleteUser,
};
