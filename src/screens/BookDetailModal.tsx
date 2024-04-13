import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface AddBookModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    bookData: { id?: number; name: string; price: string; category: string; description: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isEditing: boolean;
}

const BookDetailModal: React.FC<AddBookModalProps> = ({
    showModal,
    setShowModal,
    handleFormSubmit,
    bookData,
    handleChange,
    isEditing
}) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title>{isEditing ? "Edit Book" : "Add a New Book"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter book name"
                            required
                            onChange={handleChange}
                            value={bookData.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter price"
                            required
                            onChange={handleChange}
                            value={bookData.price}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter category"
                            required
                            onChange={handleChange}
                            value={bookData.category}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter description"
                            required
                            onChange={handleChange}
                            value={bookData.description}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    {isEditing ? "Update Book" : "Add Book"}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default BookDetailModal;
