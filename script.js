const squares = document.querySelectorAll('.square');
let player = 'X';

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.innerHTML === '') {
      square.innerHTML = player;
      if (checkWin()) {
        resetGame();
      } else {
        player = player === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWin() {
  const winningCombos = [
    // todas as combinações de vitória possíveis
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  // verificando se há alguma combinação de vitória
  return winningCombos.some(combo => {
    return combo.every(index => {
      return squares[index].innerHTML === player;
    });
  });
}

function resetGame() {
  alert(`Parabéns, jogador ${player} ganhou!`);
  squares.forEach(square => {
    square.innerHTML = '';
  });
  player = 'X';
}
