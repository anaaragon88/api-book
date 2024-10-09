import express from "express";
import {
  getAllBooks,
  createBook,
  deleteBook,
} from "../controllers/bookController.js";
import { validateCreateBook } from "../validators/bookValidator.js";

const bookrouter = express.Router();

bookrouter.get("/book", getAllBooks);
bookrouter.post("/create", validateCreateBook, createBook);
bookrouter.delete("/:id", deleteBook);

export default bookrouter;
