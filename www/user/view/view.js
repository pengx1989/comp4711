//Create Quize Questions
function createQuestion(length_of_question) {
	for (let i = 0; i < length_of_question; ++i) {
		let questionArea = $("<div id= 'qBody" + i + "' class = 'qBody'>");
		let questionBody = $("<div class='margin'>");
		let questionLabel = $("<label class='float-left'>Question " + (i + 1) +"&nbsp: </label><br>");
		let questionText = $("<p class='margin ' id='qText" + i + "'>" + question[i].ques + "</p>");
        questionBody.append(questionLabel, questionText);
		
		let answerBody = $("<div class='margin rdo-center'>");
		answerBody.attr("id", "ansBody" + i);
		for(let j = 0; j < 4; ++j){
            let radio = $("<input type='radio'class='space-right' >");
            radio.attr("id", "answerRadio" + i + j);
			radio.attr("name", "answerRadio" + i);
			
			let answerText = $("<label class='answer-txt margin option-border'>"+ question[i].ansgroup[j].option +"</label>");
			answerText.attr("id", "answer" + i + j);
			
            let br = $("<br>");
            answerBody.append(radio, answerText, br);
		}
		questionArea.append(questionBody, answerBody);
		$("#quiz_question").append(questionArea);
	}
}

//Display score
function displayScore() {
	document.getElementById("finalScore").innerHTML = 'score: ' + score + '/' + question.length ;
}

//Display title of easy quiz
function easy_quiz() {
	document.getElementById("quiz_title").innerHTML = 'Quiz(easy)';
}

//Display title of hard quiz
function hard_quiz() {
	document.getElementById("quiz_title").innerHTML = 'Quiz(hard)';
}

//Display error of easy quiz
function quizEasy() {
	document.getElementById("quiz_text").innerHTML = 'Easy quiz is not available to display!';
}

//Display error of hard quiz
function quizHard() {
	document.getElementById("quiz_text").innerHTML = 'Hard quiz is not available to display!';
}

//Display submit button
function displaySubmit() {
	$('.submit_area').append('<button type="button" class="btn btn-warning" id="sbutton" onclick = "checkScore()">Submit</button>');
}

function removebutton() {
	document.getElementById("ebutton").style.display = 'none';
	document.getElementById("hbutton").style.display = 'none';
}





