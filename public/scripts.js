$(document).ready(function() {

	// Connecting to Endpoint via AJAX
	$("#submitButton").on('click', function() {
		var courseData = {
			courseTitle: $('input#courseTitleInput').val(),
			courseNumber: $('input#courseNumberInput').val(),
			roomNumber: $('input#roomInput').val(),
			instructor: $('input#instructorInput').val()
		}


		$.ajax({
			url: '/course',
			type: 'POST',
			contentType:"application/json",
			data: JSON.stringify(courseData),
			processData: false,
			dataType: "json",

			success: function(data) {
				alert(`Successfully Entered ${courseData.courseTitle} into the Database!`);
			},
			error: function (jqXhr, textStatus, errorMessage) { // error callback
        alert('Error: ' + errorMessage);
    	}
		});
	});

	$("#getRequestButton").on('click', function() {
		$.ajax({
			url: '/course',
			type: 'GET',

			success: function(data) {
				console.log(data[0].courseTitle);
			},
			error: function(jqXhr, textStatus, errorMessage) {
				// error Callback
			}
		});
	});


		/*
		$.ajax({
			url: '/course',
			dataType: "json",
			type: 'POST',
			contentType:"application/json",
			data: JSON.stringify(courseData),
			processData: false,


			success: function(data) {
				console.log('success');
				console.log(data);
			},
			error: function (xhr, status, error) {
        console.log('Error: ' + error.message);
      },

		});
		*/

	/*
	function getItem() {
		$.ajax({
			url: '/course',
			type: 'GET',
			success: function(data) {
				alert('success');
			},
			error: function (xhr, status, error) {
        console.log('Error: ' + error.message);
      },

		});
	}
*/







// LOCAL data use - no Back-End Connections
// The code underneath is used just to create and update data without using MongoDB and Server
/*
	var dateVal;
	var timeVal;

	$(".dateInput").change(function(){
		var date = $(this).find("option:selected").text();
		dateVal = date;
	});

	$(".timeInput").change(function(){
		var time = $(this).find("option:selected").text();
		timeVal = time;
	});





	$("#submitButton").click(function(e) {
		e.preventDefault(); //Bootstrap button refreshes page as a default - since this refreshes the jQuery code as well, this code will prevent from the default page loader.



		 var courseTitleVal = $('input#courseTitleInput').val();
		 var courseNumberVal = $('input#courseNumberInput').val();
		 var roomNumberVal = $('input#roomInput').val();
		 var instructorVal = $('input#instructorInput').val();






		$("#dateOutput").text(dateVal);

		$("#courseTitleOutput").text(courseTitleVal);
		$("#courseNumberOutput").text(courseNumberVal);
		$("#roomNumberOutput").text(roomNumberVal);
		$("#instructorOutput").text(instructorVal);

		$("#timeOutput").text(timeVal);


		var timeTableVal = "<p>" + courseTitleVal + "</p>" + "<p>" + courseNumberVal + "</p>" + "<p>" + roomNumberVal + "</p>" + "<p>" + instructorVal + "</p>";

		switch(dateVal) {
			case "Monday":
				addTimeTable(timeVal, timeTableVal, 1);
				break;
			case "Tuesday":
				addTimeTable(timeVal, timeTableVal, 2);
				break;
			case "Wednesday":
				//$("#wed").append("<p>jQuery Works!</p>")
				addTimeTable(timeVal, timeTableVal, 3);
				break;
			case "Thursday":
				//$("#thur").append("<p>jQuery Works!</p>")
				addTimeTable(timeVal, timeTableVal, 4);
				break;
			case "Friday":
				//$("#fri").append("<p>jQuery Works!</p>")
				addTimeTable(timeVal, timeTableVal, 5);
				break;
			case "Saturday":
				//$("#sat").append("<p>jQuery Works!</p>")
				addTimeTable(timeVal, timeTableVal, 6);
				break;
			case "Sunday":
				alert("Take some break!");
				break;
		}
	});
});

function addTimeTable(timeVal, timeTableVal, dayOfTheWeek) {

	if (timeVal === "9:00~12:00") {
		$(".morningClass").children().eq(dayOfTheWeek).attr("Rowspan", "3");
		$(".morningClass").children().eq(dayOfTheWeek).addClass("saicClass");
		$(".morningClass").children().eq(dayOfTheWeek).html(timeTableVal);
	} else if (timeVal === "9:00~16:00") {
		$(".morningClass").children().eq(dayOfTheWeek).attr("Rowspan", "7");
		$(".morningClass").children().eq(dayOfTheWeek).addClass("saicClass");
		$(".morningClass").children().eq(dayOfTheWeek).html(timeTableVal);
	} else if (timeVal === "13:00~16:00") {
		$(".afternoonClass").children().eq(dayOfTheWeek).attr("Rowspan", "3");
		$(".afternoonClass").children().eq(dayOfTheWeek).addClass("saicClass");
		$(".afternoonClass").children().eq(dayOfTheWeek).html(timeTableVal);
	} else if (timeVal === "18:00~19:30") {
		$(".eveningClass").children().eq(dayOfTheWeek).attr("Rowspan", "1.5");
		$(".eveningClass").children().eq(dayOfTheWeek).addClass("saicClass");
		$(".eveningClass").children().eq(dayOfTheWeek).html(timeTableVal);
	} else if (timeVal === "18:00~21:00") {
		$(".eveningClass").children().eq(dayOfTheWeek).attr("Rowspan", "3");
		$(".eveningClass").children().eq(dayOfTheWeek).addClass("saicClass");
		$(".eveningClass").children().eq(dayOfTheWeek).html(timeTableVal);
				}
				*/
});
