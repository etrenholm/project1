// global variables vv
var difficulty = ''
var category = ''
var dataIndex = 0
var points = 100
var catergorySection = document.querySelector('#category-section')
var difficultySection = document.querySelector('#difficulty-section')
var randomSection = document.querySelector('#random-section')

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
randomCat.addEventListener('click', function(){
    var randomNumbers = ['27', '26', '11', '22', '12', '21', '14', '28']
    var randomNumber = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];
    category = randomNumber
})

var startBtn = document.querySelector('#start-btn')
startBtn.addEventListener('click', function(){
    startTrivia()
})
var body = document.querySelector('#body')

var questonCont = document.createElement('div')

questonCont.classList.add('question-container')

function resetState(){
    
}

function startTrivia(){

// fetch trivia question data

fetch('https://opentdb.com/api.php?amount=10&category=' + category + '&difficulty=' + difficulty + '&type=multiple')
    .then(response => response.json())
    .then(data => {
        
        //generate question based on data
        function generateQuestion(){
            if(dataIndex >= 10){
                resetState();
            }
        var question = data['results'][dataIndex]['question']
        var answer1 = data['results'][dataIndex]['incorrect_answers']['0']
        var answer2 = data['results'][dataIndex]['incorrect_answers']['1']
        var answer3 = data['results'][dataIndex]['incorrect_answers']['2']
        var answer4 = data['results'][dataIndex]['correct_answer']
        catergorySection.classList.add('hide')
        randomSection.classList.add('hide')
        difficultySection.classList.add('hide')

        
        var answers = [
            {
                'text': answer1, 
                'correct': 'false'
             
            },
            {
                'text': answer2, 
                'correct': 'false'
            
            },
            {
                'text': answer3, 
                'correct': 'false'
       
            },
            {
                'text': answer4, 
                'correct': 'true'
            }
            ]
        var randomAnswers = answers.sort((a,b) => 0.5 - Math.random())
        body.appendChild(questonCont)

        var questionEl = document.createElement('h1')
        questionEl.classList.add("question-class")
        questionEl.innerHTML = question
        questonCont.appendChild(questionEl)
        for(var i =0; i < randomAnswers.length; i++){
            var answerEl = document.createElement('button')
            answerEl.classList.add('answr-btns')
            var correct = randomAnswers[i]['correct']
            questonCont.appendChild(answerEl)
            answerEl.innerText = randomAnswers[i]['text']
           
                if(correct === 'true'){
                answerEl.addEventListener('click', function(){
                questonCont.removeChild(questionEl)
                dataIndex = dataIndex + 1
                window.alert('correct')               
                while (questonCont.firstChild){
                    questonCont.firstChild.remove()
                }
                generateQuestion() 
                return
                })}
                else{
                answerEl.addEventListener('click', function(){
                questonCont.removeChild(questionEl)
                dataIndex = dataIndex + 1
                points = points -10
                console.log(points)
                window.alert('wrong')
                while (questonCont.firstChild){
                    questonCont.firstChild.remove()
                }
                generateQuestion()
                return
                })}    
        }
        }
    
    generateQuestion()
})}


fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        var advice = data['slip']['advice']
        console.log(advice)
    })


