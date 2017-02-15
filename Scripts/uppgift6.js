function OnLoad(){
	document.getElementById("FlyButton").addEventListener("click", PrintDestination);
}


function PrintDestination()
{
	var destination = document.getElementById("destination");
	var outputBox = document.getElementById("output");
	
	if (destination.value.length > 0)
	{
		outputBox.innerHTML = "Du ska flyga till... <b>" + destination.value + "</br>";
	}
}