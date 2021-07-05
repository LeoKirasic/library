let myLibrary = [];
function Book (title, author, pages, read)  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      return `${title} by ${author}, ${pages}, ${read}`;
    }
  }
let counter = 0;
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary[counter] = book;
    counter++;
}

addBookToLibrary('thehobbit', 'jk rowling', '250', 'no');
addBookToLibrary('testbook', 'testname', 'testpages', 'yes');
addBookToLibrary('a', 'b', 'c', 'd');


const container = document.querySelector('#book-container');

function displayBooks () {
  for(let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement('div');
    book.classList.add('book');
    book.textContent = myLibrary[i].info();
    container.appendChild(book);
  }
}

displayBooks();
