import bookModel from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
