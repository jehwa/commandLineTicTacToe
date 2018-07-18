let prompt = require('prompt');

let board = {
  1: '_',
  2: '_',
  3: '_',
  4: '_',
  5: '_',
  6: '_',
  7: ' ',
  8: ' ',
  9: ' '
}

let player = 'X';

let changePlayer = () => {
  player === 'X' ? player = 'O' : player = 'X';
}

let putVal = (position) => {
  board[position] = player;
}

let playGame = () => {
  prompt.start();
  
  prompt.get(['place'], function (err, result) {
    if(board[result.place]) {
      putVal(result.place);
      console.log(`_${board[1]}_|_${board[2]}_|_${board[3]}_`);
      console.log(`_${board[4]}_|_${board[5]}_|_${board[6]}_`);
      console.log(` ${board[7]} | ${board[8]} | ${board[9]} `);
      changePlayer();
      playGame();
    } else {
      console.log('Game is done!');
    }
  });
  
}

playGame();
