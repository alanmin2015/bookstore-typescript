import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BooksState } from './types';

const initialState: BooksState = {
    BookList: [],
};

const booksSlice = createSlice({
    name: 'bookstore',
    initialState,
    reducers: {
        setBookList(state, action: PayloadAction<Book[]>) {
            state.BookList = action.payload;
        },
        deleteBook(state, action: PayloadAction<number>) {
            state.BookList = state.BookList.filter(book => book.id !== action.payload);
        },
        createBook(state, action: PayloadAction<Book>) {
            state.BookList.push(action.payload);
        },
        updateBook(state, action: PayloadAction<{ bookID: number; updateBook: Book }>) {
            const index = state.BookList.findIndex(book => book.id === action.payload.bookID);
            if (index !== -1) {
                state.BookList[index] = action.payload.updateBook;
            }
        },
    },
});

export const { setBookList, deleteBook, createBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;