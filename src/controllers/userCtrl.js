import userModel from "../models/users.model.js";

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: "Error al obtener los usuarios" });
    console.log(error);
  }
};

// Obtener un usuario por su ID
const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(404).json({ message: "Error al obtener el usuario" });
    console.log(error);
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json({ data: newUser });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el usuario" });
    console.log(error);
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ data: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el usuario" });
    console.log(error);
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el usuario" });
    console.log(error);
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
