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
		$('#newGame').hide();
		this.xHand = [''];
		this.oHand = [''];
		this.takenTiles = [''];
		this.currentTurn = 0;
		$('.fullBoard > div > div').empty();
	}

};

var winCondition = function(){
	var winnerIs =  Game.currentPlayer();
	var winCodeX = function() {
		if ($('#topLeft').html() == '<p>' + winnerIs + '</p>' && $('#top').html() == '<p>' + winnerIs + '</p>' && $('#topRight').html() == '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#topLeft').html()=== '<p>' + winnerIs + '</p>' && $('#mid').html()=== '<p>' + winnerIs + '</p>' && $('#botRight').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#topLeft').html()=== '<p>' + winnerIs + '</p>' && $('#midLeft').html()=== '<p>' + winnerIs + '</p>' && $('#botLeft').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#top').html()=== '<p>' + winnerIs + '</p>' && $('#mid').html()=== '<p>' + winnerIs + '</p>' && $('#bot').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#topRight').html()=== '<p>' + winnerIs + '</p>' && $('#mid').html()=== '<p>' + winnerIs + '</p>' && $('#botLeft').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#topRight').html()=== '<p>' + winnerIs + '</p>'&& $('#midRight').html()=== '<p>' + winnerIs + '</p>' && $('#botRight').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#midLeft').html()=== '<p>' + winnerIs + '</p>' && $('#mid').html()=== '<p>' + winnerIs + '</p>' && $('#midRight').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if($('#botLeft').html()=== '<p>' + winnerIs + '</p>' && $('#bot').html()=== '<p>' + winnerIs + '</p>' && $('#botRight').html()=== '<p>' + winnerIs + '</p>'){
			alert(winnerIs + ' WON THE GAME!');
			$('#newGame').show();
		} else if(Game.currentTurn == 8){
			alert('NO CHICKEN DINNER');
			$('#newGame').show();
		} else {
			console.log('no winner yet');
		}
	}; 
	winCodeX();
	console.log('current turn is ' + Game.currentTurn);
};


$(function(){
	Game.newGame();
	$('.cell').on('click', function(){
	//console.log('you clicked ' + $(this).attr('id'));
	/* To avoid the user changing the state of the cell we 
	use one() which will only run the code once */
		var usersTile = $(this).attr('id');
		if (Game.takenTiles.includes(usersTile)){
			console.log('taken tile');
		} else {
			Game.takenTiles.push(usersTile);
			$(this).html('<p>' + Game.currentPlayer() + '</p>');
			//selecting id to use for determining winner
			Game.usersHand(usersTile);
			winCondition();
			Game.currentTurn++;
		}

	});

	$('#newGame').on('click', function(){
		Game.newGame();
	});
});
