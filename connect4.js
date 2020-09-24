
// Step One - Planning

// what HTML would be useful for the game board itself?
// - Table (Row and Columns)
// - Div (adding for adding and removing colors)

// how could you represent a played-piece in the HTML board?
// - By using a div 

// in the JavaScript, what would be a good structure for the in-memory game board?

// - 2D Array data structure: 7 indexed arrays, 6 arrays = board array


// ARRAY SHOULD LOOK LIKE THIS:

/**
    [
    Index[0]-table-row-h: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[1]-table-row-7: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[2]-table-row-6: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[3]-table-row-6: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[4]-table-row-4: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[5]-table-row-3: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[6]-table-row-2: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    Index[7]-table-row-1: [table-col-6, table-col-5, table-col-4, table-col-3, table-col-2, table-col-1],
    ]
 */

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


function makeHTMLBoard()
{
    // - select the div element using getelementby id and name it colorDiv. Using getelemntbyid because I will be appending
    const table = document.getElementById('table');
    const topRow = document.getElementById('table-row-head');
    //Clickable Top
    let divRow = document.getElementById('table-row'); //tr
    let divCol = document.getElementById('table-col'); //td

    topRow.addEventListener('click', handleClick);

    table.appendChild(divRow);

      // make main part of board

     
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


