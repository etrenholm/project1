//Global variables 
var returnButton = document.querySelector('#start-btn')
var easyList = document.querySelector('#easy-list')
var medList = document.querySelector('#med-list')
var hardList = document.querySelector('#hard-list')


//return to home page when clicked
returnButton.addEventListener('click', function(){
    location.href = './index.html'
})

//function to display score upon load using local storage

function displayScores(){
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var obj = JSON.parse(localStorage.getItem(key))
        var user = obj.Name
        var score = obj.Score
        var diff = obj.Type
        var scoreEl = document.createElement('li')
        scoreEl.textContent = user + ': ' + score
        if(diff === 'easy'){

            easyList.appendChild(scoreEl)


        }
        else if (diff === 'medium'){

            medList.appendChild(scoreEl)

        }
        else{

            hardList.appendChild(scoreEl)

        }
       
    }
}
displayScores()