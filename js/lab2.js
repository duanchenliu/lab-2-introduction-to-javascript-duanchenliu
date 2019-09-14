
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering();

function dataFiltering() {
	var attractions = attractionData;

	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 * 
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	var topFive = [];

	attractions.sort(function (a, b) {
		return b.Visitors - a.Visitors;
	});
	// console.log(attractions)
	topFive = attractions.slice(0,5);
	console.log(topFive);
	console.log(attractions);
	renderBarChart(topFive);
}

function dataManipulation() {
	var attractions = attractionData;
	let selectBox = document.querySelector("#attraction-category");
	let selectedValue = selectBox.options[selectBox.selectedIndex].value;
	console.log(selectedValue);
	if (selectedValue!="all"){
		let newArray = [];
		if(selectedValue== "Theme Park"){
			newArray = attractions.filter(checkThemePark);
		}
		else if(selectedValue=="Water Park"){
			newArray = attractions.filter(checkWaterPark);
		}
		else{
			newArray = attractions.filter(checkMuseum);
		}
		newArray.sort(function (a, b) {
			return b.Visitors - a.Visitors;
		});
		newArray=newArray.slice(0,5);
		console.log(newArray);
		renderBarChart(newArray);
	}
}

function checkThemePark(value){
	return value.Category == "Theme Park";
}

function checkWaterPark(value){
	return value.Category == "Water Park";
}

function checkMuseum(value){
	return value.Category =="Museum";
}