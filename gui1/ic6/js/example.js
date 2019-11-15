var list = document.getElementsByTagName("UL")[0];

// ADD NEW ITEM TO END OF LIST
var li = document.createElement("LI");
li.appendChild(document.createTextNode("kale"));
list.appendChild(li);

// ADD NEW ITEM START OF LIST
li = document.createElement("LI");
li.appendChild(document.createTextNode("cream"));
list.insertBefore(li, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var items = 0;
for (elmnt in list.childNodes) {
	list.childNodes[elmnt].className = "cool";
	if (list.childNodes[elmnt].tagName == "LI") items++;
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var span = document.createElement("SPAN");
span.appendChild(document.createTextNode(items));
document.getElementsByTagName("H2")[0].appendChild(span);