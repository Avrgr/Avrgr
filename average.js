document.addEventListener("DOMContentLoaded", load, false);

function load(){
	var calc = document.getElementById("calculate");
	calc.addEventListener("click",validate,false);

	document.getElementById("clear").addEventListener("click",clear);	
}

function validate(e){
	var errors = false;
	var inputs = document.getElementsByTagName("input");
	console.log(inputs[0].value);	
	for(var i=0;i < inputs.length;i++){
		if(isNaN(inputs[i].value)==true|| inputs[i].value == ""){
			inputs[i].select();
			inputs[i].focus();
			e.preventDefault();
			return false;
		}
	}

	if(!errors){
		calculate(inputs);
	}
}

function clear(e){
	if(confirm("Clear all fields?")){
		var inputs = document.getElementsByTagName("input");
		for(var i = 0;i < inputs.length;i++){
			inputs[i].value = "";
		}
		inputs[0].focus();
	}
	else{
		e.preventDefault();
	}
}

function calculate(inputs,e){
	var total = 0;
	var values = [1,-9,3,7,9,2,5];
	for(var i = 0; i < inputs.length; i++){
		total += inputs[i].value * values[i];
	}
	var average = total/inputs[1].value;
	alert(average.toFixed(2));
	inputs[0].focus();
}

// Total Points For
//  (excluding any spot or handicap) 1 per ball 1
//  number of balls sunk per game
//  including 3 for the eight ball
// Total Games -9 per game -9
//  number of games actually played
// Total Games Won 3 per game won 3
//  number of games actually won
// ERO Eight Ball Run Out 7 ero 7
//  number of ERO's actually accomplished
// 8BK Eight Ball Breaks 2 per 8bk 2
//  number of 8BK actually accomplished
// ERO AGNST (ERO's Against) 9 per ero 9
//  number of ERO's actually accomplished
// against you.
// 1ST 1st Attempts 5 per 1st 5
//  number of 1st's actually accomplished
//  not including ERO's or 8BK's
// SCORING:
// In scoring, each player receives one point for each of their group of balls (stripes or
// solids) legally pocketed, plus three points when the eight ball is legally pocketed. This
// makes a total of ten points per game. A player is always credited with ten points when
// they win a game.If the shooter pockets the 8-ball before it is legal to do so or if the
// shooter scratches on the 8-ball, the opponent automatically receives 10 points. The loser
// always receives one point for every one of their balls sunk during that game. The loser
// cannot score more than seven points in a game.
// RANKING WEIGHTED AVERAGES:
// The league's software package adds up the preceding "FEATS" and divides them by
// the total amount of games played throughout the entire season. Your weighted average 
// 18
// can change from one week to the next. The following examples will show you just how it
// works. Lisa wins three out of four games in her first night of league play. The scores
// were 10-6, 10-6, 7-10 and 10-6.
// Lisa Scored 37 Total Points on this night 37 x 1 = 37
// Lisa Played 4 Total Games on this night 4 x -9.0 = -36
// Lisa Scored 3 Total Wins on this night 3 x 3 = 9
//  Total = 10
//  10 divided by 4 games = 2.50 Ranking Weighted Average

