import Book from './Book.js';
import UI from './UI.js'
import Store from './Store.js'


// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fiil in all fields', 'danger');
  } else {
    // Instante book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert('Book Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  // console.log(e.target.classList);

  if(e.target.classList.contains('delete')) {
    // Show success message
    UI.showAlert('Book Removed', 'success');
  };

  // Remove book from store
  const isbn = e.target.parentElement.previousElementSibling.textContent;
  Store.removeBook(isbn);
  // console.log(e.target.parentElement.previousElementSibling.textContent);

});