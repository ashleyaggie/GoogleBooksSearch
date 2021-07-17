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
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            image={ book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                            link={book.volumeInfo.infoLink}
                            description={book.volumeInfo.description}
                            onClickSave={() => deleteBook(book.id)}
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