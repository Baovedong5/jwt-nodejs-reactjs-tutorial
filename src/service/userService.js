import bcrypt from "bcryptjs";
import connection from "../config/configDatabase";

const hashUserPassword = (userPassword) => {
  const salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);

  const [results, fields] = await connection.query(
    `INSERT INTO users (email, password, username) VALUES (?,?,?)`,
    [email, hashPass, username]
  );
};

const getUserList = async () => {
  try {
    const [results, fields] = await connection.query("SELECT * FROM users");
    return results;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  const [results, fields] = await connection.query(
    `Delete from users Where id=?`,
    [id]
  );
};

module.exports = { createNewUser, getUserList, deleteUser };
