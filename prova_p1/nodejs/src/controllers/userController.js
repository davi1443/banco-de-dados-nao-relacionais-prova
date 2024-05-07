const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "Nao foi possivel encontrar o usuario" });
        }
        res.status(200).json({ message: "Usuario deletado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Nao foi possivel encontrar o usuario" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};