class Library {
  library = [];
  addBook(book) {
    this.library.push(book);
  }
  getAllBooks() {
    return this.library;
  }
  removeBook(id) {
    this.library = this.library.filter((book) => book.id !== id);
  }
}

class Book {
  constructor(
    id = 1,
    author = "Robert Martin",
    title = "Clean Code",
    pages = 123,
    read = false
  ) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

const myLibrary = new Library();
const container = document.querySelector("#container");
const form = document.querySelector("#form");
const formElements = {
  author: document.querySelector("#author"),
  title: document.querySelector("#title"),
  pages: document.querySelector("#pages"),
  read: document.querySelector("#read"),
};

const generateBookTemplate = (book, index) => {
  const listItem = document.createElement("li");
  const template = `<span class="container-item__value">${book.title}</span><span class="container-item__value">${book.author}</span><span class="container-item__value">${book.pages}</span><span class="container-item__value">${book.read}</span>
  <button data-id=${index}>remove</button>`;
  listItem.innerHTML = template;
  return listItem;
};

const handleDeleteBook = (e) => {
  const id = e.target.dataset.id;
  console.log('handleDeleteBook', id)
  myLibrary.removeBook(id);
  render();
};

const registerDeleteListeners = () => {
  const deleteButtonsList = container.querySelectorAll("[data-id]");
  if (deleteButtonsList.length > 0) {
    const buttonsArray = Array.from(deleteButtonsList);
    buttonsArray.forEach((button) => {
      button.addEventListener("click", (e) => handleDeleteBook(e));
    });
  }
};

const render = () => {
  if (myLibrary.getAllBooks().length > 0) {
    container.innerHTML = null;
    myLibrary.getAllBooks().forEach((book, index) => {
      container.appendChild(generateBookTemplate(book, index));
    });
    return registerDeleteListeners();
  }
  return null;
};

const formatFormValues = (elements) => {
  return elements.map((element) => {
    if (element.value === "on") {
      return element.checked;
    }
    return element.value;
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const elements = Object.values(formElements);
  const formValues = formatFormValues(elements);
  const id = myLibrary.library.length;
  myLibrary.addBook(
    new Book(id, formValues[0], formValues[1], formValues[2], formValues[3])
  );
  render();
};

form.addEventListener("submit", (e) => handleSubmit(e));
document.addEventListener("DOMContentLoaded", render, false);
