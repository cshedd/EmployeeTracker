var clickData = new Firebase("https://flickering-heat-7798.firebaseio.com/");

$(document).on("click", '#addInput', function() {
	var nameGiven = $('#employeeName').val();
	var roleGiven = $('#role').val();
	var dateGiven = $('#dateStarted').val();
	var rateGiven = $('#monthlyRate').val();
	console.log("List of things: " + nameGiven + roleGiven + dateGiven + rateGiven);
	
	clickData.push({
		nameGivenFB: nameGiven,
		roleGivenFB: roleGiven,
		dateGivenFB: dateGiven,
		rateGivenFB: rateGiven
	})

	return false;

});

clickData.on("value", function(snapshot) {
	});