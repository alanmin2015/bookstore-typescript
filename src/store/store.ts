import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books-slice';

const store = configureStore({
    reducer: {
        bookstore: booksReducer
    }
});

export type AppDispatch = typeof store.dispatch;

export default store;
