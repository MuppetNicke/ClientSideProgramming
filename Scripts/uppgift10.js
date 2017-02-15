function OnLoad()
{
	document.getElementById("submitItem").addEventListener("click", AppendList);
	UpdateEventListeners();
}

function UpdateEventListeners()
{
	listItems = document.getElementsByClassName("listItem");
	
	for(let i = 0; i < listItems.length; i++)
	{
		listItems[i].addEventListener("click", DisplayListItem);
	}
}


function AppendList()
{
	var input = document.getElementById("input");
	var list = document.getElementById("list");
	
	if (input.value.length > 0)
	{
		var node = document.createElement("LI");
		node.className += " listItem";
		node.innerHTML = input.value;
		
		list.appendChild(node);
		input.value = "";
		UpdateEventListeners();
	}
}

function DisplayListItem(event)
{
	var displayBox = document.getElementById("input");
	
	displayBox.value = event.target.innerHTML;
	event.target.style.backgroundColor = "green";
}