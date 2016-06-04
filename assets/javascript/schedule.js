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

	nameGiven = $('#employeeName').val("");
	roleGiven = $('#role').val("");
	dateGiven = $('#dateStarted').val("");
	rateGiven = $('#monthlyRate').val("");




	return false;

});

clickData.on("child_added", function(childSnapshot){
	var appendName = childSnapshot.val().nameGivenFB;
	var appendRole = childSnapshot.val().roleGivenFB;
	var appendDate = childSnapshot.val().dateGivenFB;
	var appendRate = childSnapshot.val().rateGivenFB;
	var momentMonths = moment(new Date(appendDate));
	var currentMoment = moment();
	var howManyMonths = moment().diff(momentMonths, "months");
	var howMuchPaid = howManyMonths * childSnapshot.val().rateGivenFB;
	console.log(howManyMonths + " This is the months");
	console.log(appendName);
	$('#employeeTable').prepend("<tr><td>" + appendName + "</td><td>" + appendRole + "</td><td>" +  appendDate + "</td><td>" + howManyMonths + "</td><td>" + appendRate + "</td><td>$" + howMuchPaid + "</td></tr>");

});


///dateAdded: Firebase.ServerValue.TIMESTAMP
//.on('child_added', function() {});

