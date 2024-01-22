
var turn = 'X';
var winningScroreX=0;
var winningScoreO=0;

var board = [
	[0,1,2],
	[3,4,5],
	[6,7,8]
];
var scores = new Array(); 
	scores['X'] = 0;
	scores['O'] = 0;

win_indexes=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
var winSelecions=[
[0,0,0,1,1,1,0,0,0],
[1,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1],
[1,0,0,0,1,0,0,0,1],
[1,0,0,1,0,0,1,0,0],
[0,1,0,0,1,0,0,1,0],
[0,0,1,0,0,1,0,0,1],
[0,0,1,0,1,0,1,0,0]
]
var match=0;
// for(let i=0; i < winSelections.length; i++){
var A=0;

var selections = new Array();

var xturns=[0,0,0,0,0,0,0,0,0,];
var oturns=[0,0,0,0,0,0,0,0,0,];
var sumTurns=0;
idCell=0;
selections['X'] = [0,0,0,0,0,0,0,0,0];
selections['O'] = [0,0,0,0,0,0,0,0,0];

function markCheck(obj){
	obj.value = turn;
	var cell = Number(obj.id);
	sumTurns++;
	selections[turn][cell] = 1;
	checkPlayerHasAnyWinningPattern();
	console.log("player "+ turn+" has marked "+obj.id);

	if (turn == 'X' ) {
		obj.setAttribute("class", 'green-player');
		turn = 'O';
	} else {
		obj.setAttribute("class", 'red-player');
		turn = 'X';
	}

	obj.setAttribute("disabled", 'disabled');
	if (sumTurns == 9){
		console.log("player x has marked "+selections['X']);
		console.log("player o has marked "+selections['O']);
		alert("Board is full!");
	}
}

function generateGame(){
	document.getElementById('game-board').innerHTML = '';
	selections['X'] = [0,0,0,0,0,0,0,0,0];
	selections['O'] = [0,0,0,0,0,0,0,0,0];
	sumTurns = 0;
	var idCell= 0;
	for (row=0; row<3; row++){
		for (col=0; col<3; col++) {
			
			var button = document.createElement("input");
			button.setAttribute("value", ' ');
			button.setAttribute("name", 'grid');
			button.setAttribute("class", 'grid-cell');
			button.setAttribute("type", 'button');
			button.setAttribute("onclick", "markCheck(this)");
			button.setAttribute("id", idCell);
			document.getElementById('game-board').appendChild(button);
			idCell++;
		}
		var breakline = document.createElement("br");
			document.getElementById('game-board').appendChild(breakline);}}

function checkPlayerHasAnyWinningPattern() {
				gameOver = false;
				for (var p=0; p < winSelecions.length; p++) {
					if (gameOver != true) { 
						gameOver = isWinningPattern(selections[turn], winSelecions[p]);
						if ( gameOver === true ) {
							disableAllCells();
							alert('Player '+turn+' Won !!');
							break;
						} 
					}
				}

				if (sumTurns== 9 && gameOver === false){
					alert('Game Draw!');
					gameOver = true;	
				}
			}
			function disableAllCells() {

				var elements = document.getElementsByClassName("grid-cell");
				for (var i = 0; i < elements.length; i++) {
				  elements[i].disabled =true;
				}
			} 

			function isWinningPattern(player_selections,winSelecions, ){
				var match = 0;
				for (var i=0; i < 9; i++) {
					if(player_selections[i] + winSelecions[i] == 2){

						match ++;
						console.log(match);
					}
				}
			
				if (match == 3){
					scoreUpdate(turn);

					return true;
				}
			
				return false;
			}

			function scoreUpdate(turn){
				scores[turn]++;
				window.alert("player"+turn+" score +1 !");
				document.getElementById('score-'+turn).innerHTML = scores[turn];
			} 
			
			function restartGame(){
				if(scores['X'] == 0 && scores['X'] == 0){
					alert("Nothing to restart!")
				}
				scores['X'] = 0;
				document.getElementById('score-X').innerHTML = 0;
				scores['O'] = 0;
				document.getElementById('score-O').innerHTML = 0;
			}