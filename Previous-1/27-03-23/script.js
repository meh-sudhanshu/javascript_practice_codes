
// var buttons = document.getElementsByTagName('button')
// console.log(buttons[2])

// var button1 = document.getElementsByClassName('type1')
// console.log(button1[0])

// var button2 = document.getElementById('type2')
// console.log(button2)


var numberHeading = document.getElementsByClassName('number')[0]
var numberText = numberHeading.innerText
var increaseBtn = document.getElementsByClassName('increase')[0]
var decreaseBtn = document.getElementsByClassName('decrease')[0]
var warningBox = document.getElementsByClassName("warning_box")[0]
var closeBtn = document.getElementsByClassName("close_btn")[0]

console.log(numberHeading)
console.log(numberText)
console.log(increaseBtn)
console.log(warningBox)

function increaseNumber(){
    numberText = Number(numberText)
    if(numberText === 10){
        warningBox.classList.remove("hidden")
        return
    }
    numberText = numberText+1
    numberHeading.innerText = numberText

}
increaseBtn.addEventListener('click',increaseNumber)

function decreaseNumber(){
    numberText = Number(numberText)
    if(numberText === -10){
        warningBox.classList.remove("hidden")
        return
    }
    numberText = numberText-1
    numberHeading.innerText = numberText
}


decreaseBtn.addEventListener('click',decreaseNumber)


function closeWarningBoxHandler(){
    warningBox.classList.add("hidden")
}

closeBtn.addEventListener("click",closeWarningBoxHandler)