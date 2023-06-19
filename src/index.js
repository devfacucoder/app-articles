import app from "./app.js";
const PORT = 4000;
import {connDB} from "./db.js";

app.listen(PORT, () => {
  console.log(`server abierto en el puerto http://localhost:${PORT}`);
});
