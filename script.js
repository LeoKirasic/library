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
addBookToLibrary('agasga', 'bgsaga', 'cgsag', 'dgsaga');

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

const addBookBtn = document.querySelector('#add-book');
const formContent = document.querySelector('#form-content');
addBookBtn.addEventListener(('click'), () => {
  const form = document.createElement('form');
  // title input

  const titleHeading = document.createElement('div');
  titleHeading.classList.add = ('form-heading');
  titleHeading.textContent = 'TITLE';
  form.appendChild(titleHeading);

  const titleText = document.createElement('input');
  titleText.setAttribute('type', 'titleText');
  form.appendChild(titleText);
  let lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  formContent.appendChild(form);
  // author input

  const authorHeading = document.createElement('div');
  authorHeading.classList.add = ('form-heading');
  authorHeading.textContent = 'AUTHOR';
  form.appendChild(authorHeading);

  const authorText = document.createElement('input');
  titleText.setAttribute('type', 'authorText');
  form.appendChild(authorText);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  formContent.appendChild(form);

  // pages input
  const pagesHeading = document.createElement('div');
  pagesHeading.classList.add = ('form-heading');
  pagesHeading.textContent = 'PAGES';
  form.appendChild(pagesHeading);

  const pagesText = document.createElement('input');
  pagesText.setAttribute('type', 'pagesText');
  form.appendChild(pagesText);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  formContent.appendChild(form);

  // read input
  const readHeading = document.createElement('div');
  readHeading.classList.add = ('form-heading');
  readHeading.textContent = 'READ';
  form.appendChild(readHeading);

  const readText = document.createElement('input');
  readText.setAttribute('type', 'checkbox');
  form.appendChild(readText);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  formContent.appendChild(form);
});