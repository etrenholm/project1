// global variables vv
var difficulty = ''
var category = ''
//easy button
var easyBtn = document.querySelector('#easy-button');
easyBtn.addEventListener('click', function(){
    difficulty = "easy"
    console.log(difficulty)
})
//medium button
var medBtn = document.querySelector('#medium-button');
medBtn.addEventListener('click', function(){
    difficulty = "medium"
    console.log(difficulty)
})
//hard button
var hardBtn = document.querySelector('#hard-button');
hardBtn.addEventListener('click', function(){
    difficulty = "hard"
    console.log(difficulty)
})
// categorys
//animals
var animalCat = document.querySelector('#animals')
animalCat.addEventListener('click', function(){
    category = "27"
})
var celebCat = document.querySelector('#celebs')
celebCat.addEventListener('click', function(){
    category = "26"
})
var filmCat = document.querySelector('#film')
filmCat.addEventListener('click', function(){
    category = "11"
})
var geoCat = document.querySelector('#geography')
geoCat.addEventListener('click', function(){
    category = "22"
})
var musicCat = document.querySelector('#music')
musicCat.addEventListener('click', function(){
    category = "12"
})
var sportsCat = document.querySelector('#sports')
sportsCat.addEventListener('click', function(){
    category = "21"
})
var tvCat = document.querySelector('#tv')
tvCat.addEventListener('click', function(){
    category = "14"
})
var vehiclesCat = document.querySelector('#vehicles')
vehiclesCat.addEventListener('click', function(){
    category = "28"
})
var randomCat = document.querySelector('#random')

var startBtn = document.querySelector('#start-btn')
startBtn.addEventListener('click', function(){
    startTrivia()
})


function startTrivia(){
// fetch trivia question data
fetch('https://opentdb.com/api.php?amount=10&category=' + category + '&difficulty=' + difficulty + '&type=multiple')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}