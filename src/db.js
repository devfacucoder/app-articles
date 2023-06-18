import { connect } from "mongoose";
const url = `mongodb+srv://facucoder:VIa8MmkKWfssXsev@cluster0.frkwplz.mongodb.net/apparticles?retryWrites=true&w=majority`
const connDB = connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error de conexión a la base de datos", error);
  });
export { connDB};
