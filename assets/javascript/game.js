var letterOp = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var winC = 0;
var lossC = 0;
var guessL= 10;
var soFar = [];

document.onkeyup = function(event) {

	var userguess = event.key;
	console.log(userguess);

	var computerL = letterOp [Math.floor(Math.random()*letterOp.length)];
	console.log(computerL);

	

	if ((userguess === computerL)){
		var winT =document.getElementById("wintally");
		
		for (i=0;i>=0;i++){
			
			winT.innerHTML=i;

		}
	}

	else if ((userguess!==computerL)){
		var lossT = document.getElementById("losstally");
		var guessT = document.getElementById("guesscountdown");
		
		for (j=0;j>=0;j++){
			
		lossT.innerHTML=j;
		}
		for(k=10;k>0;k--){
			
		guessT.innerHTML=k;
		}
		
	}

}