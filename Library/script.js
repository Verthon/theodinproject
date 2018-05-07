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
      table.addEventListener('click', (e) => {
        if(e.target.className != "delete-btn"){console.log(e.target)}
        let tr = e.target.closest('.row');
        tr.remove();
      });
      const rowTemplate = `<tr class="row">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.number}</td>
        <td>${book.read}</td>
        <td><button id="delete-btn">x</button></td>
      </tr>`;
      table.innerHTML += rowTemplate;
   }
  updateDOM(book);
}