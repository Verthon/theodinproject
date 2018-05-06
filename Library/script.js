const toggleModal = () =>{
  const modal = document.querySelector('#modal')
  console.log(modal.className);
  
}

const btn = document.querySelector('#add');
btn.addEventListener('click', toggleModal);



const addBook = (title, author, pages, read, books) =>{
  const book = {
    title: title,
    author: author,
    pages: pages,
    read: read
  }
  books.push(book);
}