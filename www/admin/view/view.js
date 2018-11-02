var i =1;

function questionlist() {
	for ( let i =0; i < QandA.length; i++) {
		qlist [i] = i;
	}
}


function displayQuestion() {
	let $newQuestion = $('.question_list').append('<li id= "'+ i + '">' + 'Question' + i 
	+ '<button class = "del" id ="del' + i + '">Delete</button>' 
	+ '<button class = "mod" id ="mod' + i + '">Modify</button>' 
	+ '<button class = "sc" id ="sc' + i + '">Save/change</button>'+ '</li>')
	i++;
}

function displayMessage1() {
	document.getElementById("alert").innerHTML = "please enter a question in the question text, before adding any questions!";
}

function displayMessage2() {
	document.getElementById("alert").innerHTML = "please enter answers under answer area, before adding any questions!";
}

function displayMessage3() {
	document.getElementById("alert").innerHTML = "please selected a correct answer!";
}

function displayMessage4() {
	document.getElementById("alert").innerHTML = "please add questions before save!";
}

function displayMessage5() {
	document.getElementById("alert").innerHTML = "please select the diffculty of the question!";
}

