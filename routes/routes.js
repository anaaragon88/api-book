import express from 'express';
import { getAllBooks } from '../controllers/bookController.js';

const bookrouter = express.Router();

bookrouter.get('/', getAllBooks);
//bookrouter.post('/books', createBook);

export default bookrouter;