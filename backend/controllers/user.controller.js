const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send("Error fetching users");
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send("User not found");
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send("Invalid password");
      }
      res.status(200).send({
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        isAdmin: user.isAdmin,
        password: user.password,
        token: await generateToken({
          _id: user._id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          isAdmin: user.isAdmin,
          password: user.password,
        }),
      });
    } catch (error) {
      res.status(500).send("Error logging in");
    }
  },
  register: async (req, res) => {
    try {
      const { name, surname, email,isAdmin, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name:name,
        surname:surname,
        email:email,
        isAdmin:isAdmin,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).send({
        _id: newUser._id,
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        password: newUser.password,
        token: await generateToken({
          _id: newUser._id,
          name: newUser.name,
          surname: newUser.surname,
          email: newUser.email,
          isAdmin: newUser.isAdmin,
          password: newUser.password,
        }),
      });
    } catch (error) {
      res.status(500).send("Error creating user");
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, surname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.findByIdAndUpdate(id, {
        name,
        surname,
        email,
        password: hashedPassword,
      });
      res.status(200).send("User updated successfully");
    } catch (error) {
      res.status(500).send("Error updating user");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.status(200).send("User deleted successfully");
    } catch (error) {
      res.status(500).send("Error deleting user");
    }
  },
};

const generateToken = async ({
  _id,
  name,
  surname,
  email,
  isAdmin,
  password,
}) => {
  return jwt.sign({ _id, name, surname, email, isAdmin, password }, "Muku", {
    expiresIn: "1h",
  });
};

module.exports = { userController };
