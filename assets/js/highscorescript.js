// Global Variables
var returnButton = document.querySelector('#start-btn')
var easyList = document.querySelector('#easy-list')
var medList = document.querySelector('#med-list')
var hardList = document.querySelector('#hard-list')

// When button is clicked, return to homepage
returnButton.addEventListener('click', function(){
    location.href = './index.html'
})

// Get saved scores from local storage
var savedScore = JSON.parse(localStorage.getItem("playerScoreObj")) || [];

// Scores display
function displayScores(){

    for (var i = 0; i < savedScore.length; i++) {

        var user = savedScore[i].name
        var score = savedScore[i].score
        var difficulty = savedScore[i].type

        var scoreEl = document.createElement('li')
        scoreEl.textContent = user + ': ' + score

        if(difficulty === 'easy'){
            easyList.appendChild(scoreEl)
        }

        else if (difficulty === 'medium'){
            medList.appendChild(scoreEl)
        }

        else{
            hardList.appendChild(scoreEl)
        }
       
    }
}
displayScores()