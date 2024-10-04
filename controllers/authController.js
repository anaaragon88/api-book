import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import { encrypt } from "../utils/handlePassword.js";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await encrypt(password);

    //const newUser = await userModel.create({

    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
    await userModel.create(newUser);
    res.status(201).json({ message: `${newUser.name} creado exitosamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

/*export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Contraseña incorrecta." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "100h",
    });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};*/
