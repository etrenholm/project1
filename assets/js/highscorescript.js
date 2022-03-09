var returnButton = document.querySelector('#start-btn')
var easyList = document.querySelector('#easy-list')
var medList = document.querySelector('#med-list')
var hardList = document.querySelector('#hard-list')

returnButton.addEventListener('click', function(){
    location.href = './index.html'
})

function displayScores(){
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var name = JSON.parse(localStorage.getItem(key))
        var user = name.Name
        var score = name.Score
        var diff = name.Type
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