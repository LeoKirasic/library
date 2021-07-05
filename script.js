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
let i = 0;
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary [i]= [book];
    i++;
}