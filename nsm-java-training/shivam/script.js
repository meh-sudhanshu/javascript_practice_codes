



const myForm = document.getElementsByClassName("ip-form")[0]
const button = document.getElementsByClassName('btn')[0]
const ctn = document.getElementsByClassName("ctn")[0]

var baseUrl = "https://api.unsplash.com/photos/?client_id=6Utc3-o98q4N_LJyvNVUW62YAA5zCnT9okUlUV4NW3o&query="

function clickHandler(event){
    event.preventDefault()
    const inputValue = document.querySelector("#ip-f").value
    baseUrl = baseUrl+inputValue


    const response = fetch(baseUrl)


    response.then(res => res.json())
    .then(data =>{
       for(var i=0;i<=data.length;i++){
        const image = data[i].urls.full
        const imageTag = document.createElement("img")
        imageTag.src = image
        imageTag.classList.add("image")
        console.log(imageTag)
        ctn.appendChild(imageTag)
       }
    })
    



}





button.addEventListener('click',clickHandler)
console.log(button)
console.log(myForm)


// `https://api.unsplash.com/search/photos?page=${2}&query=${naruto}&client_id=sPeiWRTSIcvi6HlnI8UVUVsdfQxYp_jm1nmdKjFR0ug`;



// base url : https://api.unsplash.com/

// naruto