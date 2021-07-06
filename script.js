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
function addBookToLibrary(title, author, pages, read) {
let counter = 0;

    const book = new Book(title, author, pages, read);
    myLibrary[counter] = book;
    counter++;
}

// addBookToLibrary('thehobbit', 'jk rowling', '250', 'no');
// addBookToLibrary('testbook', 'testname', 'testpages', 'yes');
// addBookToLibrary('a', 'b', 'c', 'd');
// addBookToLibrary('agasga', 'bgsaga', 'cgsag', 'dgsaga');

const container = document.querySelector('#book-container');

function displayBooks () {
  for(let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement('div');
    book.classList.add('book');
    book.textContent = myLibrary[i].info();
    container.appendChild(book);
  }
}

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener(('click'), () => {
  let form = document.forms.form;
  let title = form.elements.title;
  console.log(title.value);
  let author = form.elements.author;
  console.log(author.value);
  let pages = form.elements.pages;
  console.log(pages.value);
  let read = form.elements.read;
  console.log(read.checked);

  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  displayBooks();

});


// popup form code
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal (modal) {
  if(modal == null) return 
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal (modal) {
  if(modal == null) return 
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
