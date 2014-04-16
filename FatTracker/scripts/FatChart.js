
function drawChart(e) {
    

    
var allFats =_.pluck(fatViewModel.fats, 'Fat'), 
    allWater = _.pluck(fatViewModel.fats, 'Water'), 
    allMuscle = _.pluck(fatViewModel.fats, 'Muscle'), 
    allDates = _.pluck(fatViewModel.fats, 'EntryDate');
    
    debugger;
    alert(allWater.length);
    
var lineChartData = {
			labels : allDates,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : allFats
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : allWater
				}
			]

		};

    new Chart(document.getElementById("fatCanvas").getContext("2d")).Line(lineChartData);
}

	