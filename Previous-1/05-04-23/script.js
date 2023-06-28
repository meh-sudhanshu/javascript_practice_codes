

var heading = document.getElementsByClassName('heading')[0]
console.log(heading)

var number = heading.innerText
console.log(number)

var warningBox = document.getElementsByClassName("warning-box")[0]
var closeBtn = document.getElementsByClassName("close_btn")[0]
var warning = document.getElementsByClassName("warning")[0]


var buttons = document.getElementsByClassName("btn")
var increaseBtn = buttons[0]
var decreaseBtn = buttons[1]

console.log(buttons)
console.log(increaseBtn)
console.log(decreaseBtn)

function increaseHandler(){
    number = Number(number)
    if(number === 10){
        warning.innerHTML = "Number can not go above 10"
        warningBox.classList.remove("hidden")
        return
    }
    number = number+1
    heading.innerHTML = number

}
function decreaseHandler(){
    number = Number(number)
    if(number === -10){
        warning.innerHTML = "number can not go below 10"
        warningBox.classList.remove("hidden")
        return
    }
    number = number-1
    heading.innerHTML = number
}

function toggleWarningBox(){
    warningBox.classList.add("hidden")
}


increaseBtn.addEventListener('click',increaseHandler)
decreaseBtn.addEventListener('click',decreaseHandler)
closeBtn.addEventListener('click',toggleWarningBox)