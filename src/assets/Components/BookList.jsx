import { useState } from "react";

const BookList = ({ books }) => {

    return (
        <div className="bookCardDiv">
                {/* think i'll try lifting this from a sub Component */}
                {/* book Cards will display here */}
            {books.map((book, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>
                                <h3>{book.title}</h3>        
                                <p> by {book.author}</p>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
};

export default BookList
