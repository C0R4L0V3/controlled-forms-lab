import { useState } from "react";

const BookForm = (props) => {

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })

    const handleChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value}) //should update all the form information
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent refresh
        console.log(newBook);
        props.addBook(newBook);// calls the parent fucntion to add the book
        setNewBook({
            title: '',
            author: '',
        }) // clears input
    };

    return (

        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Title: </label>
                <input 
                id="titleInput" 
                name="title" 
                type="text"
                value={newBook.title}
                onChange={handleChange}
                />
                <label htmlFor="authorInput">Author: </label>
                <input 
                id="authorInput" 
                name="author" 
                type="text"
                value={newBook.author}
                onChange={handleChange}
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )

};

export default BookForm