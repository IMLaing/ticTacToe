var Game = {
	xHand: [],
	oHand: [],
	currentTurn: 0,
	activePlayer: '0',
	players: ['X','O'],
	takenTiles: [],
	currentPlayer: function(){
		if(this.currentTurn % 2 === 0){
			this['activePlayer'] = '0';
			return this.players[0];
			
		}else{
			this['activePlayer'] = '1';
			return this.players[1];
			

		}
	},
	usersHand: function(usersTile){
		console.log(this.activePlayer + ' will get the tile ' + usersTile);
		if(this.activePlayer == 0){
			this.xHand.push(usersTile);
			console.log(this.xHand);
		} else {
			this.oHand.push(usersTile);
			console.log(this.oHand);
		}
		
	},
	newGame: function(){
		this.xHand = [''];
		this.oHand = [''];
		this.takenTiles = [''];
		this.currentTurn = 0;
		$('.fullBoard > div > div').empty();
	}

};

var winCondition = function(){
	var winCodeX = Game.xHand.join('');
	var winCodeO = Game.oHand.join('');
	var x = jQuery.inArray( "topLeft", Game.xHand);
	console.log(x + ' is inArray');


	//joins all elements of array in to a string to compare against win result
	/*switch (winCodeX){
	 case "topLefttoptopRight":
	 console.log('winCodeX has won the game!');
	 Game.newGame();
	 break;
	 case "topLeftmidbotRight":
	 console.log('winCodeX has won the game!');
	 break;
	 case "topLeftmidLeftbotLeft":
	 console.log('winCodeX has won the game!');
	 break;
	 case "topmidbot":
	 console.log('winCodeX has won the game!');
	 break;
	 case "topRightmidbotLeft":
	 console.log('winCodeX has won the game!');
	 break;
	 case "topRightmidRightbotRight":
	 console.log('winCodeX has won the game!');
	 break;
	 case "midLeftmidmidRight":
	 console.log('winCodeX has won the game!');
	 break;
	 case "botLeftbotbotRight":
	 console.log('winCodeX has won the game!');
	}*/
};

$(function(){
	$('.cell').on('click', function(){
	//console.log('you clicked ' + $(this).attr('id'));
	/* To avoid the user changing the state of the cell we 
	use one() which will only run the code once */
		
		var usersTile = $(this).attr('id');
			
		if (Game.takenTiles.includes(usersTile)){
			console.log('taken tile');
		} else {
			Game.takenTiles.push(usersTile);
			$(this).html(Game.currentPlayer());
			//selecting id to use for determining winner
			Game.usersHand(usersTile);
			Game.currentTurn++;
		}
	
		winCondition();
		console.log('winCondition ran');

		
	});
});

//push id of tile in to an array
//if array contains taken square no html else html