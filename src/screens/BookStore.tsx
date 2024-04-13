import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

import { useSelector, useDispatch } from 'react-redux';
import { deleteBookAction, createBookAction, updateBookAction } from '../store/books-action';
import { Book, RootState,EditableBook  } from '../store/types';
import { AppDispatch } from "../store/store";

import BookDetailModal from "./BookDetailModal";

const BookTable: React.FC = () => {
    const books = useSelector((state: RootState) => state.bookstore.BookList);
    const dispatch = useDispatch<AppDispatch>();

    const [showModal, setShowModal] = useState(false);
    const [bookData, setBookData] = useState<EditableBook>({ name: '', price: '', category: '', description: '' });
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = (bookId: number) => {
        dispatch(deleteBookAction(bookId));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isEditing && bookData.id) {
            dispatch(updateBookAction(bookData.id, {...bookData, id: bookData.id}));
        } else {
          const newId = books.reduce((maxId, book) => Math.max(maxId, book.id), 0) + 1;
          dispatch(createBookAction({ ...bookData, id: newId }));
        }
        setShowModal(false);
        setBookData({ id: undefined, name: '', price: '', category: '', description: '' });
        setIsEditing(false); 
    };

    const handleEdit = (book: Book) => {
        setBookData(book);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData({...bookData, [e.target.id]: e.target.value });
    };

    return (
        <div className="container mt-3">
            <div className="table-responsive" style={{ width: "60%", margin: "auto" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Button
                        variant="primary"
                        onClick={() => {
                            setIsEditing(false);
                            setBookData({ id: undefined, name: '', price: '', category: '', description: '' });
                            setShowModal(true);
                        }}
                        style={{ marginBottom: "10px", fontSize: "24px" }}
                    >
                        Add a Book
                    </Button>
                </div>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book: Book) => (
                            <tr key={book.id}>
                                <td onClick={() => handleEdit(book)} style={{ cursor: "pointer" }}>{book.name}</td>
                                <td>${book.price}</td>
                                <td>{book.category}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <BookDetailModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleFormSubmit={handleFormSubmit}
                bookData={bookData}
                handleChange={handleChange}
                isEditing={isEditing}
            />
        </div>
    );
};

export default BookTable;
