import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../utils/API";
import List from "../components/List";
import Card from "../components/Card";

function Saved() {
    const [books, setBooks] = useState([]);

    useEffect (() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getSavedBooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
    }
    
    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
    }

    return (
        <div className="results-container">
            <h4>Saved Books</h4>
            {books.length ? (
            <List>
                {books.map(book => {
                    return (
                        <Card
                            key={book._id}
                            title={book.title}
                            authors={book.authors}
                            image={book.image}
                            link={book.link}
                            description={book.description}
                            onClickDelete={() => deleteBook(book._id)}
                            >
                        </Card>
                    )
                })}
            </List>
            ) : (
                <h3>No Results to Display.</h3>
            )}
        </div>
    );
  }


export default Saved;