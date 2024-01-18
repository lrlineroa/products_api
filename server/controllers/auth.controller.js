import axios from "axios";
import db from "../database/models";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, UserRoleId } = req.body;
    // Check if the email exists
    const userExists = await db.User.findOne({
      where: { email },
    });
    if (userExists) {
      return res
        .status(400)
        .send("Email is already associated with an account");
    }

    await db.User.create({
      name,
      email,
      password: await bcrypt.hash(password, 15),
      UserRoleId,
    });
    let loginResponse = await axios.post(`http://localhost:${process.env.PORT}/users/sign-in`, { email, password });
    return res.json(loginResponse.data);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error in registering user");
  }
};

export const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(404).json("Email not found");
    }

    // Verify password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(404).json("Incorrect email and password combination");
    }

    // Authenticate user with jwt
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    });

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      UserRoleId:user.UserRoleId,
      accessToken: token,
    });
  } catch (err) {
    return res.status(500).send("Sign in error");
  }
};
