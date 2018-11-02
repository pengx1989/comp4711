//Load easy quiz
function loadEasyQuiz() {
	requestData2();
}


//request data from mysql for easy quiz
function requestDataEasy() {
	removebutton();
	document.getElementById("ebutton").disabled = true;
	document.getElementById("hbutton").disabled = true;
	
	var url= '/fetch';
	//var exam = [];

	$.get(url, 
	function(data,status) {
		
		question = JSON.parse(data[0].QFull);
		
		console.log(question);
		console.log(question.length);
		
		for (let i = 0;  i < question.length; i++) {
			if (question[i] == "") {
				question.splice(i,1);
				i--;
			}
		}
		
		for (let i = 0;  i < question.length; i++) {
			if (question[i].tagQ == "hard") {
				question.splice(i,1);
				i--;
			}
		}
		
		if (question.length == 0) {
			quizEasy();
		} else { 
		createQuestion(question.length); 
		displaySubmit();
		easy_quiz();}	
	});
}


//request data from mysql for hard quiz
function requestDataHard() {
	removebutton();
	document.getElementById("ebutton").disabled = true;
	document.getElementById("hbutton").disabled = true;
	
	var url= '/fetch';
	//var exam = [];

	$.get(url, 
	function(data,status) {
		
		question = JSON.parse(data[0].QFull);
		
		console.log(question);
		console.log(question.length);
		
		for (let i = 0;  i < question.length; i++) {
			if (question[i] == "") {
				question.splice(i,1);
				i--;
			}
		}
		
		for (let i = 0;  i < question.length; i++) {
			if (question[i].tagQ == "easy") {
				question.splice(i,1);
				i--;
			}
		}
		
		if (question.length == 0) {
			quizHard();
		} else { 
		createQuestion(question.length); 
		displaySubmit();
		hard_quiz();}
	});
}

