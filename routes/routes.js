import express from "express";
import {
  getAllBooks,
  createBook,
  deleteBook,
} from "../controllers/bookController.js";

const bookrouter = express.Router();

bookrouter.get("/book", getAllBooks);
bookrouter.post("/create", createBook);
bookrouter.delete("/:id", deleteBook);

export default bookrouter;
