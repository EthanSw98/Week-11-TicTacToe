
const x_class = 'x'
const o_class = 'o'  // setting variables refrencing x and o classes in the CSS file, that will add x or o class to each cell as clicked
const winCombo = [  //array of winning cell combinations
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]')  //refrences each cell in the table
let winMessage = document.getElementById('winMessage')  // should refrence the winning status header
let resetButton = document.getElementById('reset') //should refrence the reset button
let board = document.getElementById("board")
let circleTurn  // sets 

resetButton.addEventListener('click', clear)

function clear(){
    cellElements.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(o_class)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick)
        winMessage.innerText=''
    })
}
 

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once:true } )
})


 function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? o_class : x_class
    placeMark(cell,currentClass)
    if(checkWin(currentClass)){
        endGame(false)

    }
    swapTurns()
}

function endGame(draw){
    if(draw){

    } else{
        winMessage.innerText = `${circleTurn ? "O" : "X"} Wins!`
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function checkWin(currentClass){
    return winCombo.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

