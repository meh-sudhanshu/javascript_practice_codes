var body = document.getElementsByTagName("body")[0]
console.log(body)
function scrollHandler(){
    var myDiv = document.createElement("div")
    myDiv.classList.add("main")

    var heading = document.createElement("h2") // <h2></h2>
    heading.classList.add("heading")

    heading.innerHTML = "This is a dynamic heading" // <h2>This is a dynamic heading </h2>

    myDiv.appendChild(heading)
    body.appendChild(myDiv)
}

window.addEventListener("scroll",scrollHandler)