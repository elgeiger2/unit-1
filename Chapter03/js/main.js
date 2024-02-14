//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
    { 
        city: 'Madison',
        population: 233209,
        citySize: "Medium"
    },
    {
        city: 'Milwaukee',
        population: 594833,
        citySize: "Large"
    },
    {
        city: 'Green Bay',
        population: 104057,
        citySize: "Medium"
    },
    {
        city: 'Superior',
        population: 27244,
        citySize: "Small"
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th><th>City Size</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><td>" + cityPop[i].citySize + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }



    document.querySelector("#mydiv").appendChild(table);
}

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		document.querySelector("table").color = color;
}});


	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

document.addEventListener('DOMContentLoaded',initialize)


//define fetch request
function jsAjax(){
    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){

    var myData = response;

    console.log(myData) //function "myData" can be used as it is within callback function
    
};

 // console.log(myData) yields "undefined;" function "myData" can't be used outside callback function

window.onload = jsAjax();







function debugAjax(){
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
            return response.json();
        })

			.then(debugCallback)
            
};

function debugCallback(response){

    var myData = response; 
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br> GeoJSON data: <br>' + JSON.stringify(myData))
};
window.onload = debugAjax();





