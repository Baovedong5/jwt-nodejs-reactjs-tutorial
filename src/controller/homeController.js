import {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
} from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUser = async (req, res) => {
  let userList = await getUserList();
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

const getUpdateUserPage = async (req, res) => {
  let id = req.params.id;
  let user = await getUserById(id);
  let userData = {};
  if (user && user.length > 0) {
    userData = user[0];
  }

  return res.render("user-update.ejs", { userData });
};

const handleUpdateUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;

  await updateUserInfor(email, username, id);

  return res.redirect("/user");
};

module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
  handleDeleteUser,
  getUpdateUserPage,
  handleUpdateUser,
};
