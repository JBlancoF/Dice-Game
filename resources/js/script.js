



var scores, roundScore, activePlayer, gameActive ;

gameActive = false

// document.querySelector('#current-'+ activePlayer).textContent = dice;
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '<em>';


//WHICH PLAYER BEGINNINGS
function playerStart(){
    var x = Math.random()
    if(x >= 0.5){
        return 1
    } else{
        return 0
    }
}
 

//INITIALITATION OF THE GAME
function init(){
    scores = [0,0];
    gameActive = true;
    roundScore = 0;
    activePlayer = playerStart();
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-1').src = '/resources/css/img/dice_1.svg';
    document.querySelector('#dice-2').style.display = 'block';
    document.querySelector('#dice-2').src = '/resources/css/img/dice_1.svg';

    document.querySelector('.counter-box-0').classList.remove('active');
    document.querySelector('.counter-box-1').classList.remove('active');
    document.querySelector('.icon-turn-0').classList.remove('activeI');
    document.querySelector('.icon-turn-1').classList.remove('activeI');

    document.querySelector('.counter-box-'+ activePlayer).classList.add('active');
    document.querySelector('.icon-turn-'+ activePlayer).classList.add('activeI');

    document.getElementById('score-0').textContent = '00';
    document.getElementById('score-1').textContent = '00';
    document.getElementById('current-0').textContent = '00';
    document.getElementById('current-1').textContent = '00';
    document.querySelector('.player-name-0').textContent = 'Player 1';
    document.querySelector('.player-name-1').textContent = 'Player 2';

}

//EACH PLAYE HOLDS THEIR POINTS
function hold(){
    if(gameActive){
        scores[activePlayer] += roundScore
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

        //SCORE INPUT
        var input = document.querySelector('.score-input').value 
        var winningScore
        if(input){
            winningScore = input;
        } else {
            winningScore = 100;
        }


        //IF WINS
        if(scores[activePlayer] >= winningScore){
            document.querySelector('.player-name-'+activePlayer).textContent = "WINNER!!"
            document.querySelector('#dice-1').style.display = 'none'
            document.querySelector('#dice-2').style.display = 'none';
                gameActive = false
        }else{
        next() 
        }
    }
}

//NEXT PLAYER TURNS
function next(){
    roundScore = 0
    document.querySelector('#current-'+ activePlayer).textContent = '00';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
   
    document.querySelector('.counter-box-0').classList.toggle('active');
    document.querySelector('.counter-box-1').classList.toggle('active');
    document.querySelector('.icon-turn-0').classList.toggle('activeI');
    document.querySelector('.icon-turn-1').classList.toggle('activeI');

}

//EACH PLAYER PLAY THE GAME
function play(){
    if(gameActive){
        var dice1 = Math.floor(Math.random() * 6) + 1
        var dice2 = Math.floor(Math.random() * 6) + 1
        
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-1').src = '/resources/css/img/dice_'+ dice1 +'.svg';
        document.querySelector('#dice-2').style.display = 'block';
        document.querySelector('#dice-2').src = '/resources/css/img/dice_'+ dice2 +'.svg';
    

        if(dice1 == 1 || dice2 == 1){
            next()
        } else{
            roundScore += (dice1 + dice2)
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }
        
    }
}


document.querySelector('.btn-roll-0').addEventListener('click', play,);
document.querySelector('.btn-roll-1').addEventListener('click', play,);

document.querySelector('.btn-hold-0').addEventListener('click',hold);
document.querySelector('.btn-hold-1').addEventListener('click',hold);

document.querySelector('.btn-start').addEventListener('click', init);



