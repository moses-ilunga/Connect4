/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

var WIDTH = 7;
var HEIGHT = 6;

var currPlayer = 1; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for(let i = 0; i < HEIGHT; i++){
    board.push(Array.from({ length: WIDTH}));
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  let htmlBoard = document.getElementById('board');
  // TODO: add comment for this code
  var top = document.createElement("tr"); // Creates a Table row
  top.setAttribute("id", "column-top"); //Set's the ID of the new table row to 'column-top
  top.addEventListener("click", handleClick); // Listneing for a click on the top row

  for (var x = 0; x < WIDTH; x++) {
    var headCell = document.createElement("td"); //creating a cell the first Column cell
    headCell.setAttribute("id", x); //Setting the attribute to the first column cell to ID and giving it a number using the x iterator
    top.append(headCell); //Appending the headcell (column) to the first row, then it does it again until it x = WIDTH
  }
  htmlBoard.append(top); //appending the top row which now has columns to the htmlBoard (array)

  // TODO: add comment for this code
  for (var y = 0; y < HEIGHT; y++) { 
    const row = document.createElement("tr"); //Creating the next row
    for (var x = 0; x < WIDTH; x++) { 
      const cell = document.createElement("td"); //creating the next column under the row
      cell.setAttribute("id", `${y}-${x}`); //setting the ID of the column to the current number of WIDTH - HEIGHT because height is less than width
      row.append(cell); //append the column (cell) to the new row
    }
    htmlBoard.append(row); //append the row (tr) to the htmlBoard (array)
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for(let i = HEIGHT - 1; i >= 0; i--) //Height -1 because the first row is the playing piece
  if(!board[i][x]){
    return i;
  }
  return 0;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  let newDiv = document.createElement('div'); //Created DIV element
  newDiv.classList.add('piece'); //Adding the div element to have a class of 'piece'
  newDiv.classList.add(`p${currPlayer}`); //adding another class to div for p1 or p2 (player 1 or 2)
  newDiv.style.top = -50 * (y+2); //Possioning the div

  const findSpot = document.getElementById(`${y}-${x}`);
  findSpot.append(newDiv);
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  return alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  var x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  var y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    endGame(`Player ${currPlayer} won!`);
    return location.reload();
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if(board.every(row => row.every(cell => cell))){
    return endGame('TIE');
  }
  // switch players
  // TODO: switch currPlayer 1 <-> 2

  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (var y = 0; y < HEIGHT; y++) { //Working with columns
    for (var x = 0; x < WIDTH; x++) { //Working with the rows of the columns
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]]; // Bcause the ID's for the columns are 1 - 6, the horizontal variable has every tr element with it's perspective column (td) element
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]]; // This vertical variable holds every column (td) element with its persepctive row (tr) element
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]]; //This is going diagonally to the right by getting the first initial td and tr, then adding 1 to the ID's of the tr and td's which allows us to move diagonally
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]]; //This is going diagonally to the left by getting the first initial td and tr, then adding 1 to col (td) ID and subtracting 1 from the row (tr) ID in order for us to move diagonally to the left

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
