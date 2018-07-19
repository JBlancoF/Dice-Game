
var scores, roundScores, activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-'+ activePlayer).textContent = dice;
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '<em>';

document.querySelector('.diceSvg').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1
    console.log(dice);
    
    document.querySelector('.diceSvg').style.display = 'block';
    document.querySelector('.diceSvg').src = '/resources/css/img/dice_' + dice + '.svg';

    if(dice == 1){
        activePlayer === 0 ? activePlayer === 1 : activePlayer === 0
        roundScore = 0
        console.log(activePlayer);
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

         
    } else{
        roundScore += dice
        console.log(roundScore);
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

    }

    

})