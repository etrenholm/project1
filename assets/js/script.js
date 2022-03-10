// global variables vv
var difficulty = ''
var category = ''
var dataIndex = 0
var points = 0
var categorySection = document.querySelector("#category-section")
var randomSection = document.querySelector("#random")
var difficultySection = document.querySelector("#difficulty-section")
var startPageBtnContainer = document.querySelector("#startpage-btn-container")
var quizPageBtnContainer = document.querySelector("#quizpage-btn-container")
var allCategory = document.querySelectorAll('.cat-btn')


var backdrop
var modal

var savedScore = JSON.parse(localStorage.getItem("playerScoreObj")) || [];


// easy button
var easyBtn = document.querySelector('#easy-button');
easyBtn.addEventListener('click', function(){
    difficulty = "easy"
    easyBtn.classList.remove('category-unselected')
    easyBtn.classList.add('category-selected') 
    medBtn.classList.add('category-unselected')
    hardBtn.classList.add('category-unselected')
})

// medium button
var medBtn = document.querySelector('#medium-button');
medBtn.addEventListener('click', function(){
    difficulty = "medium"
    medBtn.classList.remove('category-unselected')
    easyBtn.classList.add('category-unselected') 
    medBtn.classList.add('category-selected')
    hardBtn.classList.add('category-unselected')
    
})

// hard button
var hardBtn = document.querySelector('#hard-button');
hardBtn.addEventListener('click', function(){
    difficulty = "hard"
    hardBtn.classList.remove('category-unselected')
    easyBtn.classList.add('category-unselected') 
    medBtn.classList.add('category-unselected')
    hardBtn.classList.add('category-selected')
    
})

// category buttons
var animalCat = document.querySelector('#animals')
animalCat.addEventListener('click', function(){
    category = "27"
    for (var i = 0; i < allCategory.length; i++) {
       allCategory[i].classList.add('category-unselected')
      }
    animalCat.classList.remove('category-unselected')
    animalCat.classList.add('category-selected')
})
var celebCat = document.querySelector('#celebs')
celebCat.addEventListener('click', function(){
    category = "26"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     celebCat.classList.remove('category-unselected')
     celebCat.classList.add('category-selected')
})
var filmCat = document.querySelector('#film')
filmCat.addEventListener('click', function(){
    category = "11"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     filmCat.classList.remove('category-unselected')
     filmCat.classList.add('category-selected')
})
var geoCat = document.querySelector('#geography')
geoCat.addEventListener('click', function(){
    category = "22"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     geoCat.classList.remove('category-unselected')
     geoCat.classList.add('category-selected')
})
var musicCat = document.querySelector('#music')
musicCat.addEventListener('click', function(){
    category = "12"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     musicCat.classList.remove('category-unselected')
     musicCat.classList.add('category-selected')
})
var sportsCat = document.querySelector('#sports')
sportsCat.addEventListener('click', function(){
    category = "21"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     sportsCat.classList.remove('category-unselected')
     sportsCat.classList.add('category-selected')
})
var tvCat = document.querySelector('#tv')
tvCat.addEventListener('click', function(){
    category = "14"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     tvCat.classList.remove('category-unselected')
     tvCat.classList.add('category-selected')
})
var vehiclesCat = document.querySelector('#vehicles')
vehiclesCat.addEventListener('click', function(){
    category = "28"
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     vehiclesCat.classList.remove('category-unselected')
     vehiclesCat.classList.add('category-selected')
})
var randomCat = document.querySelector('#random')
randomCat.addEventListener('click', function(){
    var randomNumbers = ['27', '26', '11', '22', '12', '21', '14', '28']
    var randomNumber = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];
    category = randomNumber
    for (var i = 0; i < allCategory.length; i++) {
        allCategory[i].classList.add('category-unselected')
       }
     randomCat.classList.remove('category-unselected')
     randomCat.classList.add('category-selected')
})


// start button
var startBtn = document.querySelector('#start-btn')
startBtn.addEventListener('click', function(){
    if(category === '' || difficulty === ''){
        console.log("worked")
    }else{
    startTrivia()
    }
})

var body = document.querySelector('#body')
var questonCont = document.createElement('div')

questonCont.classList.add('question-container')


// start trivia
function startTrivia(){

// fetch trivia question data
fetch('https://opentdb.com/api.php?amount=10&category=' + category + '&difficulty=' + difficulty + '&type=multiple')
    .then(response => response.json())
    .then(data => {

        
    // generate question based on API data
    function generateQuestion(){  

        // define questions and answers based on API data    
        var question = data['results'][dataIndex]['question']
        var answer1 = data['results'][dataIndex]['incorrect_answers']['0']
        var answer2 = data['results'][dataIndex]['incorrect_answers']['1']
        var answer3 = data['results'][dataIndex]['incorrect_answers']['2']
        var answer4 = data['results'][dataIndex]['correct_answer']
        
        // hide start section
        categorySection.classList.add("hide")
        randomSection.classList.add("hide")
        difficultySection.classList.add("hide")
        startPageBtnContainer.classList.add("hide")

        // array of objects to add data to answers to determine if they're right or wrong
        var answers = [
            {'text': answer1,'correct': 'false'},
            {'text': answer2,'correct': 'false'},
            {'text': answer3,'correct': 'false'},
            {'text': answer4,'correct': 'true'}
            ]

        // sort answers randomly so the 4th selection isn't always the correct answer
        var randomAnswers = answers.sort((a,b) => 0.5 - Math.random())

        // append question to page
        var containerEl = document.querySelector(".container")
        containerEl.appendChild(questonCont)

        var questionEl = document.createElement('h1')
        questionEl.classList.add("question-class")
        questionEl.innerHTML = question
        questonCont.appendChild(questionEl)

        // loop through answers to appened them to question card
        for(var i =0; i < randomAnswers.length; i++){
            var answerEl = document.createElement('button')
            answerEl.classList.add('answr-btns')
            var correct = randomAnswers[i]['correct']
            questonCont.appendChild(answerEl)
            answerEl.innerHTML = randomAnswers[i]['text']

            // check for if the selected answer is true
            if(correct === 'true'){
                answerEl.addEventListener('click', function(){
                questonCont.removeChild(questionEl)
                points = points + 10
                dataIndex = dataIndex + 1
                
                while (questonCont.firstChild){
                    questonCont.firstChild.remove()
                }

                generateQuestion() 
                return;
            })}

            // stop trivia after 10 correct answers
            else if(dataIndex === 10) {
                var user = window.prompt('Congratulations! You have reached the maximum score of' + points + 'Please enter your name:')

                    var playerScore = {
                        Name: user,
                        Score: points
                    }

                    savedScore.push(playerScore)
                    savedScore.sort((a,b) => {
                    return b.score - a.score;
                    })

                    localStorage.setItem('playerScoreObj', JSON.stringify(savedScore))
                    document.location.reload();
            }
            else{
            function closeModal(){
                document.location.reload();
            }
            
            answerEl.addEventListener('click', function(){
                fetch('https://api.adviceslip.com/advice')
                .then(response => response.json())
                .then(data => {
                    var advice = data['slip']['advice']
                    var user = ''
            
                // cover page in backdrop
                var backdrop = document.createElement('div');
                backdrop.classList.add('backdrop')
                backdrop.addEventListener('click', closeModal)
                document.body.appendChild(backdrop)
                
                // create modal container
                var modal = document.createElement('div')
                modal.classList.add('modal')

                // append modal text
                var modalHead = document.createElement('h1')
                modalHead.classList.add
                modalHead.innerHTML = advice
                modal.appendChild(modalHead)

                var modalScore = document.createElement('h4')
                modalScore.innerHTML = ' Your score was ' + points + '.'
                modal.appendChild(modalScore)

                var modalText = document.createElement('p')
                modalText.innerHTML = 'Enter your name: '
                modal.appendChild(modalText)

                // input for user name
                var modalInputContainer = document.createElement('div')
                modalInputContainer.classList.add('modal-input')
                modal.appendChild(modalInputContainer)

                var modalInputArea = document.createElement('textarea')
                modalInputArea.addEventListener('input', function(){
                    user = modalInputArea.value
                })
                modalInputContainer.appendChild(modalInputArea)

                //modal actions ie - confirm / cancel
                var modalActionsContainer = document.createElement('div')
                modalActionsContainer.classList.add('modal-actions')
                modal.appendChild(modalActionsContainer)

                var cancelButton = document.createElement('button')
                cancelButton.setAttribute('type', 'button')
                cancelButton.classList.add('btn-cancel')
                cancelButton.textContent = 'Cancel'
                cancelButton.addEventListener('click', closeModal)
                modalActionsContainer.appendChild(cancelButton)

                var confirmButton = document.createElement('button')
                confirmButton.setAttribute('type', 'button')
                confirmButton.classList.add('btn-confirm')
                confirmButton.textContent = 'Confirm'
                confirmButton.addEventListener('click', function(){

                // locally store data
                var playerScore = {
                    name: user,
                    score: points,
                    type: difficulty
                }

                savedScore.push(playerScore)
                savedScore.sort((a,b) => {
                    return b.score - a.score;
                })

                localStorage.setItem('playerScoreObj', JSON.stringify(savedScore))

                closeModal();
                })

                modalActionsContainer.appendChild(confirmButton)
                body.appendChild(modal)

           
            dataIndex = dataIndex + 1
            return;
            })})}    
        }
    }
    
    generateQuestion()
})}





