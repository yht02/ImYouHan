const boxContainer = document.querySelector(".boxContainer")
//const boxContainer = document.querySelector("#boxContainer") use this if it is an id
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImageContainer = document.querySelector(".saluteImageContainer")
const myName = document.querySelector(".name")
const titleContainer = document.querySelector(".titleContainer")
const title = document.querySelector(".title")
const projectTitle = document.querySelector(".projectTitle")
const phone = document.querySelector(".phone")
const laptop = document.querySelector(".laptop")


// FIND THEM
  const indicesList = [0,1,2,3,55,56,57,58,110,111,165,166,167,168,220,221,222,223,275,276,
    330,331,385,386,5,6,60,61,115,116,170,171,225,226,280,281,335,336,390,391,8,9,14,15,63,64,
    65,69,70,118,119,120,124,125,173,174,175,176,179,180,228,229,231,232,233,234,235,283,284,287,
    288,289,290,338,339,343,344,345,393,394,399,400,17,18,19,72,73,74,75,127,128,130,131,182,183,
    186,237,238,241,292,293,295,296,347,348,349,350,402,403,404,24,25,26,27,28,29,79,80,81,82,83,
    84,136,137,191,192,246,247,301,302,356,357,411,412,31,32,36,37,86,87,91,92,141,142,146,147,196,
    197,198,199,200,201,202,251,252,253,254,255,256,257,306,307,311,312,361,362,366,367,416,417,421,
    422,39,40,41,42,43,94,95,96,97,98,149,150,204,205,206,207,208,259,260,261,262,263,314,315,369,370,
    371,372,373,424,425,426,427,428,46,47,48,51,52,53,100,101,102,103,106,107,108,109,155,156,158,159,
    160,161,163,164,210,211,213,214,215,216,218,219,265,266,269,270,273,274,320,321,328,329,375,376,383,
    384,430,431,438,439
    ];



for(let i = 0; i < 440; i++){
    const element = document.createElement("div")
    element.classList = "box";
    // Check if the current index is in the array of box indices for GitHub
    if (indicesList.includes(i)) {
        element.classList.add("active");
    }
    boxContainer.appendChild(element)
}



window.addEventListener("scroll", ()=>{
    let offsetY = window.scrollY
    saluteTextContainer.style.transform = `translateY(${offsetY*0.7}px)`
    saluteImageContainer.style.transform = `translate(${offsetY*0.4}px, ${offsetY*0.7}px)`
    myName.style.transform = `translate(${offsetY*0.15}px)`
    titleContainer.style.backgroundPositionY = `${offsetY*0.5}px)`
    title.style.transform = `translateX(calc(200vh - ${offsetY}px))`
    projectTitle.style.transform = `translateY(calc(300vh - ${offsetY}px))`
    phone.style.transform = `translateX(calc(400vh - ${offsetY}px))`
    laptop.style.transform = `translateX(calc(-500vh + ${offsetY}px))`

})



const scriptURL = 'https://script.google.com/macros/s/AKfycbywc6tQwEoXRSAB6nCD3jWp1LJ0X6JXYpE9UnZzPiDjIWRoKNND8uWjQggy9rJ6yN2Y/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message is sent successfully 😀"
        setTimeout(function(){
            msg.innerHTML = "" 
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

