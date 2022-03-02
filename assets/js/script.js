// global variables vv
var difficulty = ''
var category = ''
var dataIndex = 0
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
var strtBtnCont = document.querySelector('#start-btn-container')


function startTrivia(){
// fetch trivia question data

fetch('https://opentdb.com/api.php?amount=10&category=' + category + '&difficulty=' + difficulty + '&type=multiple')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //generate question based on data
        function generateQuestion(){
        var nextBtn = document.createElement('button')
        var questionEl = document.createElement('h1')
        questionEl.innerHTML = question
        nextBtn.innerHTML = 'next'
        strtBtnCont.appendChild(nextBtn)
        strtBtnCont.appendChild(questionEl)
        nextBtn.addEventListener('click', function(){
            strtBtnCont.removeChild(questionEl)
            strtBtnCont.removeChild(nextBtn)
            dataIndex = dataIndex + 1
            generateQuestion()
            return
    })
    }
    generateQuestion()
    })}



