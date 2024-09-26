

var increaseBtn = document.getElementById("increase-btn")
var decreaseBtn = document.getElementById("decrease-btn")

var number = document.getElementById("number")
var currentNumber = Number(number.innerText)


function increaseHandler(e){
    e.preventDefault()
    if(currentNumber === 10){
        alert("number can not go above 10")
        return
    }
    currentNumber = currentNumber + 1;
    number.innerText = currentNumber
    console.log(currentNumber,"updated number")
}

function decreaseHandler(e){
    e.preventDefault()
    if(currentNumber === -10){
        alert("number can not go below -10")
        return
    }
    currentNumber = currentNumber - 1;
    number.innerText = currentNumber
    console.log(currentNumber,"updated number")
}

increaseBtn.addEventListener('click',increaseHandler)
decreaseBtn.addEventListener("click",decreaseHandler)