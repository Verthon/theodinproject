const submitBook = () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const number = document.querySelector('#number');
  const read = document.querySelector('#read');
  const btn = document.querySelector('#add-book');
  btn.addEventListener('click', addBook(title.value, 
                                        author.value,
                                        number.value,
                                        read.checked));
  
}

const toggleModal = () =>{
  const modal = document.querySelector('#modal')
  modal.classList.toggle('modal-hidden');
  const book = document.querySelector('#add-book');
  book.addEventListener('click', submitBook);
}

const btn = document.querySelector('#open-modal');
btn.addEventListener('click', toggleModal);



const addBook = (title, author, pages, read, books) =>{
  const book = {
    title: title,
    author: author,
    number: pages,
    read: read 
  }
  const updateDOM = (book) =>{
      const table = document.querySelector('#library');
      const deleteBtn = document.querySelector('#delete-btn');
      const rowTemplate = `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.number}</td>
        <td>${book.read}</td>
        <td><button id="delete-btn">x</button></td>
      </tr>`;
      table.innerHTML += rowTemplate;
      deleteBtn.addEventListener('click', (e) => {
        console.log(e)
      });
   }
  updateDOM(book);
}