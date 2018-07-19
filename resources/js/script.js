
var scores, roundScores, activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-'+ activePlayer).textContent = dice;
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '<em>';

document.querySelector('.diceSvg').style.display = 'none';


document.querySelector('.counter-box-'+ activePlayer).classList.add('active');
document.querySelector('.icon-turn-'+ activePlayer).classList.add('activeI');


document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1

    document.querySelector('.diceSvg').style.display = 'block';
    document.querySelector('.diceSvg').src = '/resources/css/img/dice_' + dice + '.svg';

    if(dice == 1){
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        console.log(activePlayer);
        roundScore = 0
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        
        document.querySelector('.counter-box-0').classList.toggle('active');
        document.querySelector('.counter-box-1').classList.toggle('active');
        document.querySelector('.icon-turn-0').classList.toggle('activeI');
        document.querySelector('.icon-turn-1').classList.toggle('activeI');
        
    } else{
        roundScore += dice
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

        

    }

    

})