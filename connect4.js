
// Step One - Planning

// what HTML would be useful for the game board itself?
// - Table (Row and Columns)
// - Div (adding for adding and removing colors)

// how could you represent a played-piece in the HTML board?
// - By using a div 

// in the JavaScript, what would be a good structure for the in-memory game board?

// - 2D Array data structure: 7 indexed arrays, 6 arrays = board array
let board = [];

const rows = 7;
const columns = 6;

// 	- TR and TD elements
// 	- TR = Index Array
// 	- TD = 6 arrays

// - add a div element in specified row/column of the tr element with add event listener
// - have a const variable called blue
const player1 =1;//Blue
// - have a const variable called red
const player2 =2;//Red
// - select the table element with queryselector and put it in a cost variable called table


function makeHTMLBoard(){
    // - select the div element using getelementby id and name it colorDiv. Using getelemntbyid because I will be appending
    const table = document.getElementById('table');

    //Clickable Top
    let divRow = document.getElementById('table-row'); //tr
    let divCol = document.getElementById('table-col'); //td

    divRow.addEventListener('click', handleClick);

    for(let x = 0; x <= rows; x++)
    {
        divRow.appendChild(divCol);
    }

    table.appendChild(divRow);

      // make main part of board

      let boardIndex = 0;
    for(let y = 0; y < rows; y++){
        let newRow = document.createElement('tr');

        for (let x = 0; x < columns; x++) {
            let newCell = document.createElement('td');
            newCell.setAttribute('id', `${y} - ${x}`);
            newRow.append(newCell);
        }
        board.append(newRow);
    }
}



//Game Board (Array)
// let board = [];
// //Player
// let player = 1;
// //Get Table
// //Board Specs
// const rows = 7;
// const columns = 6;

// function HTMLBoard(){
//     let table = document.getElementById('table');
//     let tableHead = table.createTHead();

//     let tableRow = document.createElement('tr');
 

//     let tableColumn = document.createElement('td');


//     //let tableBody = document.createElement('tbody');

//     for(let x = 0; x <= rows; x++)
//     {
//         table.appendChild(tableRow);

//         for(let y = 0; y < columns; y++){
//             table.appendChild(tableColumn);
//         }
//     }
//     table.append(tableBody);
// }

// HTMLboard();


