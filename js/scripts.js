/* Copyright (CC BY-NC) 2019 by Beck A. Peterson. */
/* Beck A. Peterson */
/* beck_peterson@student.uml.edu */
/* I am affiliated as a student at UMass Lowell in course 91.61 GUI Programming I */
/* File created on 9/12/19 */
/* This file defines my function that loads one html file into another to decrease complexity of the files and prevent unnessisary copying of code.
   It also contains a prototype function that will display the currently selected tab in the navigation */

/* This function was assisted by w3schools */
function loadHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("class");
        if (file === "external-html") {
            file = elmnt.getAttribute("id");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 200) {
                            elmnt.innerHTML = this.responseText;
                        }
                        if (this.status === 404) {
                            elmnt.innerHTML = "Page not found.";
                        }
                        elmnt.removeAttribute("class");
                        elmnt.removeAttribute("id");
                        loadHTML();
                    }
                };
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }
}

function selectCurrentTab() {
    var z, i, elmnt;
    loadHTML();
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        if (elmnt.getAttribute("class") !== null) alert(elmnt.getAttribute("class"));
        if (elmnt.getAttribute("class") === "selectable") {
            if (window.location.pathname === elmnt.getAttribute("href")) {
                elmnt.className.replace("selectable", "selected");
            }
        }
    }
}

function generateMultiplicationTable() {
    var elmnt, topFrom, topTo, sideFrom, sideTo, topInc, sideInc, x, y, tableContents, warning, invalidInput = false;
    elmnt = document.getElementById("generatedTable");
    warning = document.getElementById("warning");
    topFrom = parseInt(document.getElementById("topFrom").value);
    topTo = parseInt(document.getElementById("topTo").value);
    sideFrom = parseInt(document.getElementById("sideFrom").value);
    sideTo = parseInt(document.getElementById("sideTo").value);

    if (isNaN(topFrom) || isNaN(topTo) || isNaN(sideFrom) || isNaN(sideTo)) {
        return;
    }

    topInc = topTo > topFrom ? 1 : -1;
    sideInc = sideTo > sideFrom ? 1 : -1;
    tableContents = "<tr><td></td>";
    for (x = topFrom; topTo > topFrom ? x <= topTo : x >= topTo; x += topInc) {
        tableContents += "<td class=\"dark\">" + x + "</td>";
    }
    tableContents += "</tr>";
    for (y = sideFrom; sideTo > sideFrom ? y <= sideTo : y >= sideTo; y += sideInc) {
        tableContents += "<tr>";
        tableContents += "<td class=\"dark\">" + y + "</td>";
        for (x = topFrom; topTo > topFrom ? x <= topTo : x >= topTo; x += topInc) {
            tableContents += "<td class=\"light\">" + (x * y) + "</td>";
        }
        tableContents += "</tr>";
    }
    elmnt.innerHTML = tableContents;
}