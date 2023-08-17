import bcrypt from "bcryptjs";
import connection from "../config/configDatabase";
import db from "../models";

const hashUserPassword = (userPassword) => {
  const salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);
  await db.User.create({
    email: email,
    password: hashPass,
    username: username,
  });
};

const getUserList = async () => {
  //test relationship
  let newUser = await db.User.findOne({
    where: { id: 1 },
    attributes: ["id", "username", "email"],
    include: { model: db.Group, attributes: ["name", "description"] },
    raw: true,
    nest: true,
  });

  let roles = await db.Role.findAll({
    include: {
      model: db.Group,
      where: { id: 1 },
    },
    attributes: ["url", "description"],
    raw: true,
    nest: true,
  });

  console.log(">>> check new user: ", newUser);
  console.log(">>> check new role: ", roles);

  let users = [];
  users = await db.User.findAll();
  return users;
};

const deleteUser = async (id) => {
  await db.User.destroy({
    where: { id },
  });
};

const getUserById = async (id) => {
  let user = {};
  user = await db.User.findOne({
    where: { id },
  });
  return user.get({ plain: true });
};

const updateUserInfor = async (email, username, id) => {
  await db.User.update(
    {
      email: email,
      username: username,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
};
