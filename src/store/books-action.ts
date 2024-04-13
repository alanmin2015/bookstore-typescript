import { AppDispatch } from './store'; 
import { setBookList, deleteBook, createBook, updateBook } from './books-slice';

import { Book } from './types';
import { toast } from 'react-toastify';

import books from '../books.json';

// Fetch and set the book list
export const getBookList = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setBookList(books as Book[])); 
    } catch (error) {
        toast.error("Getting booklist has something wrong!");
    }
};

// Delete a book by ID
export const deleteBookAction = (bookID: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteBook(bookID)); 
        toast.success("Delete book succeeded!");
    } catch (error) {
        toast.error("Delete book has something wrong!");
    }
};

// Create a new book
export const createBookAction = (data: Book) => async (dispatch: AppDispatch) => {
    try {
        dispatch(createBook(data)); 
        toast.success("Adding book succeeded!");
    } catch (error) {
        toast.error("Adding book has something wrong!");
    }
};

// Update an existing book
export const updateBookAction = (bookID: number, bookInfo: Book) => async (dispatch: AppDispatch) => {
    try {
        dispatch(updateBook({ bookID, updateBook: bookInfo })); 
        toast.success("Updating book succeeded!");
    } catch (error) {
        toast.error("Updating book has something wrong!");
    }
};
