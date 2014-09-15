
function drawChart(e) {
      
var allFats =_.pluck(fatViewModel.fats, 'Fat'), 
    allWater = _.pluck(fatViewModel.fats, 'Water'), 
    allMuscle = _.pluck(fatViewModel.fats, 'Muscle'), 
    allDates = _.map(fatViewModel.fats, function(fatModel) {
        return kendo.toString(fatModel.EntryDate, "dd-MM");
    });
    
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
					fillColor : "rgba(33,187,205,0.5)",
					strokeColor : "rgba(33,187,205,1)",
					pointColor : "rgba(33,187,205,1)",
					pointStrokeColor : "#faf",
					data : allMuscle
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

	