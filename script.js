const squares = document.querySelectorAll('.square');
let player = 'X';

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.innerHTML === '') {
      square.innerHTML = player;
      player = player === 'X' ? 'O' : 'X';
    }
  });
});
