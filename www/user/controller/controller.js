var question
var score = 0;

//Check the answers and display score
function checkScore() {
	let userAns = [];
	let correctAns = [];
	
	
	for (let i = 0; i < question.length; i++) {
		for (let j = 0; j < 4; j++) {
			correctAns [j] = question[i].ansgroup[j].TF;
			if (document.getElementById('answerRadio' + i + j).checked) {
			userAns [j] = true;
			} else {userAns [j] = false;}
			document.getElementById('answerRadio' + i + j).disabled=true;
		}
		console.log(userAns);
		console.log(correctAns);
		
		let index = 0;
		for (let k = 0; k < 4; k++) {
			if(correctAns[k] == true) {
			index = k;
			}
		}
		
		if (JSON.stringify(correctAns) === JSON.stringify(userAns)) {
			console.log('They are equal!');
			$('#qBody' + i).append('<label class = "correct"> Correct </label>');
			score++;
		} 
		else {console.log('They are not equal!');
		document.getElementById('answer' + i + index).style.color = "#14FF0F";
		$('#qBody' + i).append('<label class = "wrong"> Wrong </label>');
		}
	}
	document.getElementById("sbutton").disabled = true;
	displayScore();
}


