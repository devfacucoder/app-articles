import express from "express";
const app = express();

// Import the userRoutes module
import userRoutes from './routes/user.routes.js';

// Middleware to parse JSON data in the request body
app.use(express.json());

// Mount the userRoutes under the "/api/user" path
app.use("/api/user", userRoutes);

// Export the app object
export default app;
