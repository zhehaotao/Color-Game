var numSquare = 9
var colors = []
var correctColor
var resetButton = document.querySelector("#reset")
var colorDisplay = document.querySelector("#colorDisplay")
var sqrs = document.querySelectorAll(".square")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var mode = document.querySelectorAll(".mode")
var container = document.querySelector("#container")
container.classList.add("small")
// var easyBtn = document.querySelector("#easy")
// var medianBtn = document.querySelector("#median")
// var hardBtn = document.querySelector("#hard")

init()

function init(){
    setupMode()
    setupSquares()
    reset()
}

function setupMode(){
    for(i = 0; i < mode.length; i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            mode[2].classList.remove("selected");
            container.classList.remove("small")
            container.classList.remove("med")
            container.classList.remove("large")
            // We must use this here!!!!! Can't be replaced by mode[i]!!!!
            this.classList.add("selected")
            if(this.textContent === "Easy"){
                numSquare = 3
                container.classList.add("large")
            }
            else if(this.textContent === "Median"){
                numSquare = 6
                container.classList.add("med")
            }
            else{
                numSquare = 9
                container.classList.add("small")
            }
            reset()
        })
    }
}

function setupSquares(){
    for (let i = 0; i < sqrs.length; i++) {
        sqrs[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor
            if (clickedColor === correctColor) {
                messageDisplay.textContent = "Correct!"
                changeColor(clickedColor)
                h1.style.backgroundColor = clickedColor
                resetButton.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try again"
            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numSquare)
    correctColor = pickColor()
    colorDisplay.textContent = correctColor
    for(i = 0; i < sqrs.length; i++){
        if (colors[i]){
            sqrs[i].style.display = "block"
            sqrs[i].style.backgroundColor = colors[i]
        }
        else{
            sqrs[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
    resetButton.textContent = "New game!"
}

resetButton.addEventListener("click",function () {
    reset()
})



function changeColor(color) {
    for(i = 0; i < sqrs.length; i++){
        sqrs[i].style.backgroundColor = color
    }
}

function pickColor() {
    var num = Math.floor(Math.random() * colors.length)
    return colors[num]
}

function generateRandomColors(num) {
    var arr = []
    for (i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
