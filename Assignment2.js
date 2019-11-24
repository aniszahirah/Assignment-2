let turn = 0;
const players =[{name: "Player 1", position: 0},
                {name: "Player 2", position: 0}];

function rollDice(){
  var d1=Math.floor(Math.random()*6)+1;
  var move=document.querySelector('.move');
  var dice=document.querySelector('.dice');
  var next=document.querySelector('.next');

  dice.textContent=players[turn].name+" rolled "+d1+".";
  players[turn].position+=d1;

  switch(players[turn].position){

    case 8: alert(players[turn].name+" steps on a ladder! Go to square 15.");
            players[turn].position=15; break;
    case 19: alert(players[turn].name+" steps a ladder! Go to square 24.");
            players[turn].position=24; break;

    case 15: alert(players[turn].name+" steps on a snake! Go to square 5.");
            players[turn].position=5; break;
    case 23: alert(players[turn].name+" steps on a snake! Go to square 16.");
            players[turn].position=16; break;
  }

  move.textContent=players[turn].name +"'s current position : "+players[turn].position;

  if(players[turn].position>=25){
    alert("Congratulations! "+players[turn].name+" won the game.");
    setGameOver();
  }
  turn++;
  next.textContent=("It's Player 2's turn!");
  if (turn>=players.length) {
    turn=0;
    next.textContent=("It's Player 1's turn!");
  }
}

function resetGame()
{
    window.location.reload();
}

