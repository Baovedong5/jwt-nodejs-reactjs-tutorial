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
  const [results, fields] = await connection.query("SELECT * FROM users");
  return results;
};

const deleteUser = async (id) => {
  const [results, fields] = await connection.query(
    `Delete from users Where id=?`,
    [id]
  );
};

const getUserById = async (id) => {
  const [results, fields] = await connection.query(
    `Select * from users Where id=?`,
    [id]
  );
  return results;
};

const updateUserInfor = async (email, username, id) => {
  const [results, fields] = await connection.query(
    `Update users Set email=?,username=? Where id=?`,
    [email, username, id]
  );
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
};
