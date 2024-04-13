export interface Book {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
}

export interface BooksState {
    BookList: Book[];
}

export interface RootState {
    bookstore: BooksState;
}

export interface Book {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
}

// Extended type for use in component state, making `id` optional
export interface EditableBook extends Omit<Book, 'id'> {
    id?: number;
}
