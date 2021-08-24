let myLibrary = [];
class Book {
  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
      return `${title} by ${author}, ${pages} pages read: `;
    }
  }
}
function addBookToLibrary(title, author, pages, read) {
  
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    
}
const container = document.querySelector('#book-container');

let datasetCounter = 0;

function displayBooks () {
  for(let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div');
    const deleteButton = document.createElement('button');
    const readButton = document.createElement('input');
    readButton.setAttribute('type', 'checkbox');
    readButton.classList.add('checkbox');
    deleteButton.classList.add('delete-button');
    readButton.classList.add('read-button');
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.index = 0;
    readButton.dataset.index = 0;

    book.classList.add('book');
    book.dataset.index = 0;
    readButton.dataset.index = parseInt(datasetCounter);
    book.dataset.index = parseInt(datasetCounter);
    deleteButton.dataset.index = parseInt(datasetCounter);

    book.textContent = myLibrary[datasetCounter].info();
    console.log(datasetCounter);
    book.appendChild(readButton);

    book.appendChild(deleteButton);
    container.appendChild(book);

    datasetCounter++;
    
    deleteButton.addEventListener('click', () => {
            myLibrary.splice(deleteButton.dataset.index, 1);
            book.parentElement.removeChild(book);
    });

    readButton.addEventListener('click', () => {
      if(myLibrary[readButton.dataset.index].read === true) {
        myLibrary[readButton.dataset.index].read = false;
      } else {
        myLibrary[readButton.dataset.index].read = true;
      }
    });
  }
}

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener(('click'), () => {
  let form = document.forms.form;
  let title = form.elements.title;
  let author = form.elements.author;
  let pages = form.elements.pages;
  let read = false;

  if(title.value === '' || author.value === '' || pages.value === '') {
    alert(`Can't submit empty form`);
  } else if (pages.value <0 ) {
    alert(`Can't submit negative pages`);
  } else {
    addBookToLibrary(title.value, author.value, pages.value, read);
    displayBooks();
  }
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
