import connectionDB from "./database/connectionDB.js";
import bookModel from "./models/bookModel.js";
import express from "express";
import bookrouter from "./routes/routes.js";
import "dotenv/config";

export const app = express();
app.get("/hola", (req, res) => {
  res.send("Hola mundo 🚀");
});

app.use("/book", bookrouter);
console.log(
  process.env.HOST,
  process.env.PORT,
  process.env.DB_USER,
  process.env.DB_NAME
);
try {
  await connectionDB.authenticate();
  console.log("Conexión exitosa ✨");
  await bookModel.sync({ force: false });
  console.log("La tabla fue creada ✨");
} catch (error) {
  console.error("Fallo fatal y muerte 💀", error);
}

export const server = app.listen(4000, () => {
  console.log("Servidor en puerto 4000 🚀 http://localhost:4000");
});
