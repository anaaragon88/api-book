import connectionDB from "../database/connectionDB.js";
import { DataTypes } from "sequelize";

const bookModel = connectionDB.define(
  "book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

//console.log(bookModel === connectionDB.models.book); // true

export default bookModel;
