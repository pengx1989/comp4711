//Add Questionss
function addQuestion() {
	add();
	console.log(QandA);
	del();
	mod();
	saveChange();
}

//Add value in the array
function add() {
	addValue();
}

//Delete Questions
function del() {
	$(".del").on('click', function(){
		let delid = $(this).attr('id');
		let delindex = delid.substring(3);
		$(this).css('opacity','0.3');
		$("#mod" + delindex).css('opacity','0.3');
		$("#sc" + delindex).css('opacity','0.3');
		$(this).prop('disabled', true);
		$("#mod" + delindex).prop('disabled', true);
		$("#sc" + delindex).prop('disabled', true);
		QandA[delindex-1] = [];
	});
}

//Modify Questions
function mod() {
	
	$(".mod").on('click', function(){
		let modid = $(this).attr('id');
		let modindex = modid.substring(3);
		$(".sc").prop('disabled', true);
		$(".sc").css('opacity','0.3');
		$("#sc" + modindex).prop('disabled', false);
		$("#sc" + modindex).css('opacity','1');
		
		$("#questiontext").val(QandA[modindex-1].ques);		
		$("#q1").val(QandA[modindex-1].ansgroup[0].option);	
		$("#q2").val(QandA[modindex-1].ansgroup[1].option);
		$("#q3").val(QandA[modindex-1].ansgroup[2].option);
		$("#q4").val(QandA[modindex-1].ansgroup[3].option);		
			
	});
}






