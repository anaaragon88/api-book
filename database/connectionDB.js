import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const connectionDB = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);

export default connectionDB;
