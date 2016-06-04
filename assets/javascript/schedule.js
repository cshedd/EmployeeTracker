var clickData = new Firebase("https://flickering-heat-7798.firebaseio.com/");

$(document).on("click", '#addInput', function() {
	var nameGiven = $('#employeeName').val();
	var roleGiven = $('#role').val();
	var dateGiven = $('#dateStarted').val();
	var rateGiven = $('#monthlyRate').val();
	console.log("List of things: " + nameGiven + roleGiven + dateGiven + rateGiven);
	
	clickData.push({
		"nameGivenFB": nameGiven,
		"roleGivenFB": roleGiven,
		"dateGivenFB": dateGiven,
		"rateGivenFB": rateGiven
	})






	return false;

});

clickData.on("child_added", function(childSnapshot){
	var appendName = childSnapshot.val().nameGivenFB;
	var appendRole = childSnapshot.val().roleGivenFB;
	var appendDate = childSnapshot.val().dateGivenFB;
	var appendRate = childSnapshot.val().rateGivenFB;
	console.log(appendName);
	$('#employeeTable').prepend("<tr><td>" + appendName + "</td><td>" + appendRole + "</td><td>" +  appendDate + "</td><td>" + appendRate + "</td></tr>");
});


///dateAdded: Firebase.ServerValue.TIMESTAMP
//.on('child_added', function() {});

