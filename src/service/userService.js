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
