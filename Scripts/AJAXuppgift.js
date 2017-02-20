function OnLoad()
{
	document.getElementById("ajaxButton").addEventListener("click", XMLMakeRequest);
	document.getElementById("fetchButton").addEventListener("click", FetchRequest);
}


function XMLMakeRequest()
{
	let ajax = new XMLHttpRequest();
	let resultBox = document.getElementById("result");
	ajax.open('get', "http://forverkliga.se/JavaScript/api/simple.php?key=country");
	ajax.onreadystatechange = function() {
		if(ajax.status == 200 && ajax.readyState == 4)
		{
			resultBox.innerHTML = "";
			let resultObject = JSON.parse(ajax.responseText);
			for(let x in resultObject)
			{
				//resultBox.innerHTML += x.message + "\n";
				//resultBox.innerHTML += x.info + "\n";
				//resultBox.innerHTML += x + "\n";
			}
			resultBox.innerHTML += "message: " + resultObject.message + "<br>";
			resultBox.innerHTML += "info: " + resultObject.info;
			//console.log(`Old way: ${ajax.responseText}`);
			//resultBox.innerHTML = ajax.responseText;
		}
			
	}
	ajax.send();
}

function FetchRequest()
{
	fetch("http://forverkliga.se/JavaScript/api/simple.php")
	.then(function(response)
	{
		return response.json();
	})
	.then(function(json) {
		console.log("New way: ${json}")
		console.log(json.message);
		console.log(json.info);
	});
}

