import connectionDB from "./database/connectionDB.js";
import bookModel from "./models/bookModel.js";
import userModel from "./models/userModel.js";
import express from "express";
import bookrouter from "./routes/routes.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import "dotenv/config";

export const app = express();
app.get("/hola", (req, res) => {
  res.send("Hola mundo 🚀");
});
app.use(express.json());
app.use(cors());
app.use("/book", bookrouter);
app.use("/auth", authRouter);
/*console.log(
  process.env.HOST,
  process.env.PORT,
  process.env.DB_USER,
  process.env.DB_NAME
);*/
try {
  await connectionDB.authenticate();
  console.log("Conexión exitosa ✨");
  await userModel.sync({ force: false });
  console.log("La tabla user fue creada ✨");
  await bookModel.sync({ force: false });
  console.log("La tabla book fue creada ✨");
} catch (error) {
  console.error("Fallo fatal y muerte 💀", error);
}

export const server = app.listen(8000, () => {
  console.log("Servidor en puerto 8000 🚀 http://localhost:8000");
});
