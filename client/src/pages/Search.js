import React, { useState } from "react";
import "./style.css";
import API from "../utils/API";
import List from "../components/List";
import Card from "../components/Card";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState('');

  function saveBook(book) {

    const title = book.volumeInfo.title;
    const authors = book.volumeInfo.authors;
    const description = book.volumeInfo.description;
    const image = book.volumeInfo.imageLinks.thumbnail;
    const link = book.volumeInfo.infoLink;
    
    API.saveBook({ title, authors, description, image, link })
      .then(res => {
        alert('Book saved.')
      })
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBooks(bookSearch)
    .then((res) => {
        console.log(res)
        setBooks(res.data.items)
    })
    .catch(err => console.log(err));
  };

    return (
        <div>
            <div className="row">
                <form className="book-search">
                    <h4>Book Search</h4>
                    <p>Book</p>
                    <div className="input-field">
                        <input id="search" type="text" className="validate" onChange={handleInputChange} placeholder="search"/>
                        {/* <label for="search">Search</label> */}
                    </div>
                    <div className="card-action right-align">
                        <button className="btn" onClick={handleFormSubmit}>Search</button>
                    </div>
                    
                </form>
            </div>

            <div className="results-container">
                <h4>Results</h4>
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
                                onClickSave={() => saveBook(book)}
                                >
                            </Card>
                        )
                    })}
                </List>
                ) : (
                    <h3>No Results to Display.</h3>
                )}
            </div>
        </div>
    );
  }


export default Search;