const canvas = document.querySelector('#canvas');
//const ctx = canvas.getContext('2d');
const container = document.querySelector('#draw-container');
const resetBtn = document.querySelector('#reset');

const draw = () =>{
  for(let i = 1; i <= 64; i++){
    const div = document.createElement('div');
    div.setAttribute("class", "box")
    container.appendChild(div);
  }
  mark();
}

const mark = () => {
  const box = document.querySelectorAll('.box').forEach(el =>
  el.addEventListener('mouseover', () =>{
    el.classList.add('box-marked');
  }));
}

const reset = () =>{
  const box = document.querySelectorAll('.box').forEach(el =>{
    el.classList.remove('box-marked');
  });
      
}

window.addEventListener('load', draw);
resetBtn.addEventListener('click', reset);