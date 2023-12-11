const UserModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { username, contact, email, password } = req.body;

    // create new User
    let newUser = new UserModel({
      username,
      contact,
      email,
      password,
    });

    newUser = await newUser.save(); // to save the product in database

    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}); // fetch all users from database

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username, contact, email, password } = req.body;
    const userId = req.params.id;

    // update product
    let updatedUser = new UserModel({
      username,
      contact,
      email,
      password,
      _id: userId,
    });

    updatedUser = await UserModel.findByIdAndUpdate(userId, updatedUser);

    res.status(200).json({
      message: `User with id ${userId} is updated successfully`,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deleteProduct = await UserModel.findByIdAndDelete(deleteId);

    res.status(200).json(`User with id ${deleteId} is deleted successfully`);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
