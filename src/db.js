import { connect } from "mongoose";

// Import the dotenv module to load environment variables from a .env file
import dotenv from "dotenv";
dotenv.config();

// Establish a connection to the database using the URL from the environment variables
const connDB = connect(process.env.URL_CONNECT_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

// Export the connDB variable to make it available for other parts of the application
export { connDB };