var QandA = [];
var FinalQ = [];

//Add value in the array
function addValue() {
	let q = {ques:"",ansgroup:"",tagQ:""};
	let a = {option:"", TF:"" };
	let b = {option:"", TF:"" };
	let c = {option:"", TF:"" };
	let d = {option:"", TF:"" };
	let qlist =[];
	let answers=[];
	
	
	let qtext = document.getElementById ( "questiontext" ).value;
	q.ques=qtext;	
	
	if (document.getElementById('diffculty1').checked) {
		q.tagQ= "easy";
	} 
	
	if (document.getElementById('diffculty2').checked) {
		q.tagQ= "hard";
	} 
	
	a.option = document.getElementById("q1").value;
	if (document.getElementById('r1').checked) {
		a.TF = true;
		} else {a.TF = false;}
		
	b.option = document.getElementById("q2").value;
	if (document.getElementById('r2').checked) {
		b.TF = true;
		} else {b.TF = false;}
	
	c.option = document.getElementById("q3").value;
	if (document.getElementById('r3').checked) {
		c.TF = true;
		} else {c.TF = false;}
	
	d.option = document.getElementById("q4").value;
	if (document.getElementById('r4').checked) {
		d.TF = true;
		} else {d.TF = false;}
		
	answers.push(a);
	answers.push(b);
	answers.push(c);
	answers.push(d);
	q.ansgroup = answers;
	
	if (qtext == "") {
		displayMessage1();
	} 
	
	else if (q.tagQ == "") {
		displayMessage5();
	}
	
	else if (a.option == "") {
		displayMessage2();
	} 
	
	else if (b.option == "") {
		displayMessage2();
	} 
	
	else if (c.option == "") {
		displayMessage2();
	} 
	
	else if (d.option == "") {
		displayMessage2();
	} 
	
	else if (document.getElementById('r1').checked) {
		displayQuestion();
		QandA.push(q);
		document.getElementById("alert").innerHTML = "";
	}
	
	else if (document.getElementById('r2').checked) {
		displayQuestion();
		QandA.push(q);
		document.getElementById("alert").innerHTML = "";
	}
	
	else if (document.getElementById('r3').checked) {
		displayQuestion();
		QandA.push(q);
		document.getElementById("alert").innerHTML = "";
	}
	
	else if (document.getElementById('r4').checked) {
		displayQuestion();
		QandA.push(q);
		document.getElementById("alert").innerHTML = "";
	}
	
	else {
		displayMessage3();
	}	
}


//Save changed Questions
function saveChange() {
	$(".sc").prop('disabled', true);
	$(".sc").css('opacity','0.3');
	$(".sc").on('click', function() {
		let scid = $(this).attr('id');
		let scindex = scid.substring(2);
		$("#sc" + scindex).prop('disabled', true);
		$("#sc" + scindex).css('opacity','0.3');
		QandA[scindex-1].ques = document.getElementById ( "questiontext" ).value;
		QandA[scindex-1].ansgroup[0].option = document.getElementById("q1").value;
		QandA[scindex-1].ansgroup[1].option = document.getElementById("q2").value;
		QandA[scindex-1].ansgroup[2].option = document.getElementById("q3").value;
		QandA[scindex-1].ansgroup[3].option = document.getElementById("q4").value;
		
		if (document.getElementById('r1').checked) {
		QandA[scindex-1].ansgroup[0].TF = true;
		} else {QandA[scindex-1].ansgroup[0].TF = false;}
		
		if (document.getElementById('r2').checked) {
		QandA[scindex-1].ansgroup[1].TF = true;
		} else {QandA[scindex-1].ansgroup[1].TF = false;}
		
		if (document.getElementById('r3').checked) {
		QandA[scindex-1].ansgroup[2].TF = true;
		} else {QandA[scindex-1].ansgroup[2].TF = false;}
		
		if (document.getElementById('r4').checked) {
		QandA[scindex-1].ansgroup[3].TF = true;
		} else {QandA[scindex-1].ansgroup[3].TF = false;}
		
		if (document.getElementById('diffculty1').checked) {
		QandA[scindex-1].tagQ= "easy"; } 
		
		if (document.getElementById('diffculty2').checked) {
		QandA[scindex-1].tagQ= "hard";} 
		
		console.log(QandA);
	
	});

}

//Save Data to local storage
function saveQuestion() {
	if (QandA.length == 0){
	displayMessage4();
	} else {
		requestData();
	}	
	//let myjson = JSON.stringify(QandA);
	//localStorage.setItem('ques', myjson);
}

//Post request
function requestData() {
	var url= '/save';
	var params = {
		id: JSON.stringify(QandA)
	};
	$.post(url, params, 
	function(data,status) {
		console.log(status);
	});
}






