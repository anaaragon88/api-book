import bookModel from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newBook = {
      title,
      author,
      description,
    };
    await bookModel.create(newBook);
    res.status(201).json({ message: "Libro creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.destroy({ where: { id } });
    res.status(200).json({ message: "Libro eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
