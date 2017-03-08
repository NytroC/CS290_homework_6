
$(document).ready(function() {

	$('#categories-team-button').click(function() {
		var vegetables = $("#vegetables-checkbox").is(':checked');
		var plants = $("#plants-checkbox").is(':checked');
		var terrorists = $("#terrorist-checkbox").is(':checked');
		var ungulates = $("#ungulates-checkbox").is(':checked');
		var chickens = $("#chickens-checkbox").is(':checked');
		var murderers = $("#murderers-checkbox").is(':checked');

		var team_1 = $('#team-1').attr('value');
		var team_2 = $('#team-2').attr('value');
		var team_3 = $('#team-3').attr('value');
		var team_4 = $('#team-4').attr('value');

		var game_info = { "vegetables": vegetables,
						  "plants": plants,
						  "terrorists": terrorists,
						  "ungulates": ungulates,
						  "chickens": chickens, 
						  "murderers": murderers,
						  "team_1": team_1,
						  "team_2": team_2,
						  "team_3": team_3,
						  "team_4": team_4
						};

		$.post("/game_info", game_info).done(function(data) {
			console.log("Success, Game info updated");
			window.location.replace("/jeopardy");
		}).fail(function() {
			console.log("Failed, Game info failed to update");
			alert("Shit's busted.. 💩");
		});
	});



	

});



 

