import express from 'express'
import { deleteBooks, fetchBooks, insertBook, searchBooks, updateBook } from '../controller/bookController.js';

const route = express.Router();

route.get('/fetch',fetchBooks);
route.post('/add',insertBook);
route.put('/update/:id',updateBook);
route.delete('/delete/:id',deleteBooks);
route.get('/search/:id',searchBooks);

export default route;