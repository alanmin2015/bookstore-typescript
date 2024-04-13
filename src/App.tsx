import {  useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { getBookList } from './store/books-action';
import { AppDispatch } from './store/store';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import BookTable from './screens/BookStore';

function App() {
    const dispatch = useDispatch<AppDispatch>();

    dispatch(getBookList());

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bookstore-Alan</h1>
                <BookTable />
                <ToastContainer />
            </header>
        </div>
    );
}

export default App;
