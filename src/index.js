import express from "express";
const app = express();
const PORT = 4000;
import {connDB} from "./db.js";
app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.listen(PORT, () => {
  console.log(`server abierto en el puerto http://localhost:${PORT}`);
});
