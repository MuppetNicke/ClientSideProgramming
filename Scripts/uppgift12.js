function OnLoad()
{
	FetchRequest();
}


function FetchRequest()
{
	fetch("https://forverkliga.se/JavaScript/api/simple.php?world=cool")
	.then(function(response)
	{
		return response.json();
	})
	.then(function(json) {;
		if (typeof(json) === "object")
		{
			Uppgift_One(json);
			Uppgift_Two(json);
			Uppgift_Three(json);
			Uppgift_Four(json);
			Uppgift_Five(json);
		}
	});
}

function Uppgift_One(object)
{
	let resultBox = document.getElementById("1");
	resultBox.innerHTML = "";
	let amountOfPersons = 0;
	
	for(let i = 0; i < object.length; i++)
	{
		amountOfPersons += object[i].population;
	}
	resultBox.innerHTML = "Hur många människor finns det i hela världen? (jag menar alla länder som finns i data)"
	+ "<br />-<b>" + amountOfPersons + "</b>";
}

function Uppgift_Two(object)
{
	let resultBox = document.getElementById("2");
	resultBox.innerHTML = "";
	let amountOfPersons = 0;
	
	for(let i = 0; i < object.length; i++)
	{
		if(object[i].continent === "Europe")
		{
			amountOfPersons +=  object[i].population;
		}
	}
	resultBox.innerHTML = "Hur många människor finns i Europa?"
	+ "<br />-<b>" + amountOfPersons + "</b>";
}

function Uppgift_Three(object)
{
	let resultBox = document.getElementById("3");
	resultBox.innerHTML =  "";
	let amountOfWomen = 0;
	
	for(let i = 0; i < object.length; i++)
	{
		if (object[i].name === "Zimbabwe")
		{
			amountOfWomen = object[i].population * object[i].pFemale;
		}
	}
	resultBox.innerHTML = "Hur många kvinnor finns det i Zimbabwe?"
	+ "<br />-<b>" + amountOfWomen + "</b>";
}

function Uppgift_Four(object)
{
	let resultBox = document.getElementById("4");
	resultBox.innerHTML =  "";
	let smallestPop = 0;
	let smallestPopName = "";
	for(let i = 0; i < object.length; i++)
	{
		if (smallestPop === 0 || object[i].population < smallestPop)
		{
			smallestPop = object[i].population;
			smallestPopName = object[i].name;
		}
	}
	resultBox.innerHTML = "Vilket land har minst befolkning?"
	+ "<br />-<b>" + smallestPopName + ", " + smallestPop + "</b>";
}

function Uppgift_Five(object)
{
	let resultBox = document.getElementById("5");
	resultBox.innerHTML =  "";
	//Europe, Oceania, Asia, South America, Africa, North America.
	let highestPop = 0;
	let highestPopName = "";
	let ContinentStats = {Africa: 0, Asia: 0, Europe: 0, NorthAmerica: 0, Oceania: 0, SouthAmerica: 0 };
	for(let i = 0; i < object.length; i++)
	{
		let newStr = object[i].continent.replace(/ /g, '');
		ContinentStats[newStr] += object[i].population;
	}

	for (let i = 0; i < Object.keys(ContinentStats).length;  i++)
	{
		if (ContinentStats[Object.keys(ContinentStats)[i]] > highestPop)
		{
			highestPop = ContinentStats[Object.keys(ContinentStats)[i]];
			highestPopName = Object.keys(ContinentStats)[i];
		}
	}
	resultBox.innerHTML = "Vilken kontinent har högst befolkning?"
	+ "<br />-<b>" + highestPopName + ", " + highestPop + "</b>";
}