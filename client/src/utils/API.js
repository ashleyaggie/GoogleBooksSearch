import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.REACT_APP_APIKEY;

export default {
  // Get books from search
  getBooks: function(query) {
    return axios.get(BASEURL + query + "&key=" + APIKEY);
  },
  // Gets saved books
  getSavedBooks: function() {
    return axios("/api/books/");
  },
  // Deletes the book with the given id from saved
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData);
  }
};