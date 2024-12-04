import { useState } from "react";
import BookForm from "./BookForm.jsx";
import BookList from "./BookList.jsx";

const BookShelf = (props) => {

const [books, setBooks] = useState([])
// const [newBook, setNewBook] = useState({
//     title: '',
//     author: '',
// })

const addBook = (newBook) => {
    // So, we start with a brand new empty array inside addBook:
    const updatedBookShelf = [...books, newBook]; // creates a copy and merges the newBook the books clone
    console.log(updatedBookShelf);
    //essentiall setBooks([...books, newBook])
    setBooks(updatedBookShelf)//updates the book array
    

}

    return (
        <>
            <div className="bookshelfDiv">
                <BookForm addBook={addBook}/> {/* passes the addBook function*/}
                <BookList books={books} />
            </div>
        </>
    )
};

export default BookShelf;