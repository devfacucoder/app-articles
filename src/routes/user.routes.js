import { Router } from "express";
const userRoutes = Router();

// Import the userCtrl module
import * as userCtrl from "../controllers/userCtrl.js";

// Define routes and associate them with the corresponding controller functions

// Route to get all users
userRoutes.get("/", userCtrl.getAllUsers);

// Route to get a user by their userId
userRoutes.get("/:userId", userCtrl.getUserById);

// Route to create a new user
userRoutes.post("/", userCtrl.createUser);

// Route to update a user by their userId
userRoutes.put("/:userId", userCtrl.updateUser);

// Route to delete a user by their userId
userRoutes.delete("/:userId", userCtrl.deleteUser);

// Export the userRoutes object
export default userRoutes;
