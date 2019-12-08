var tblValidator = {
    highlightError: function (strVarToTest) {
        $('#' + strVarToTest).css({ "border": "2px solid red" });
        $('#' + strVarToTest).focus();
    },

    unhighlightError: function (strVarToTest) {
        $('#' + strVarToTest).css({ "border": "" });
    }
}

var currentTab = 1;
function generateMultiplicationTableTab() {
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
    currentTab++;
    $("#tabs ul").append("<li class=\"ui-state-default ui-corner-top ui-tabs-active ui-state-active\" role=\"tab\" tabindex=\"" + currentTab - 1 + "\" aria-controls=\"tabs-" + currentTab + "\" aria-labelledby=\"ui-id-" + currentTab + "\" aria-selected=\"true\" aria-expanded=\"true\"><a href=\"#tabs-" + currentTab + "\" class=\"ui-tabs-anchor\" role=\"presentation\" tabindex=\"-1\" id=\"ui-id-" + currentTab + "\"></a></li>");
    $("#tabs").append("<div id=\"tabs-" + currentTab + "\" aria-labelledby=\"ui-id-" + currentTab + "\" class=\"ui-tabs-panel ui-widget-content ui-corner-bottom\" role=\"tabpanel\" aria-hidden=\"false\">" + tableContents + "</div>")
}

$(document).ready(function () {

    // This was helped by jqueryui.com

    $("#tabs").tabs();

    $("#topFromSlider").slider().width("250px");
    $("#topFromSlider").on("slide", function (event, ui) {
        $("#topFrom").val($("#topFromSlider").slider("option", "value"));
    });
    $("#topFromSlider").slider("option", "min", -26);
    $("#topFromSlider").slider("option", "max", 51);
    $("#topFromSlider").slider("option", "value", 3);

    $("#topToSlider").slider().width("250px");
    $("#topToSlider").on("slide", function (event, ui) {
        $("#topTo").val($("#topToSlider").slider("option", "value"));
    });
    $("#topToSlider").slider("option", "min", -26);
    $("#topToSlider").slider("option", "max", 51);
    $("#topToSlider").slider("option", "value", 6);

    $("#sideFromSlider").slider().width("250px");
    $("#sideFromSlider").on("slide", function (event, ui) {
        $("#sideFrom").val($("#sideFromSlider").slider("option", "value"));
    });
    $("#sideFromSlider").slider("option", "min", -26);
    $("#sideFromSlider").slider("option", "max", 51);
    $("#sideFromSlider").slider("option", "value", -2);

    $("#sideToSlider").slider().width("250px");
    $("#sideToSlider").on("slide", function (event, ui) {
        $("#sideTo").val($("#sideToSlider").slider("option", "value"));
    });
    $("#sideToSlider").slider("option", "min", -26);
    $("#sideToSlider").slider("option", "max", 51);
    $("#sideToSlider").slider("option", "value", 3);

    function validateInput(input) {
        if (input === "") return "<empty>";
        return input.replace(/^-?\d+/, ""); // Replaces a valid possitive or negative integer, and returns the rest (the rest would be invalid input)
    }

    $("#topFrom").keyup(function () {
        var invalidPart = validateInput($("#topFrom").val());
        if (invalidPart === "") { // If the input is valid, display no warnings
            $("#topFromSlider").slider("option", "value", $("#topFrom").val());
        }
    });

    // The rest of the functions follow the same paradigm as the last one
    $("#topTo").keyup(function () {
        var invalidPart = validateInput($("#topTo").val());
        if (invalidPart === "") {
            $("#topToSlider").slider("option", "value", $("#topTo").val());
        }
    });

    $("#sideFrom").keyup(function () {
        var invalidPart = validateInput($("#sideFrom").val());
        if (invalidPart === "") {
            $("#sideFromSlider").slider("option", "value", $("#sideFrom").val());
        }
    });

    $("#sideTo").keyup(function () {
        var invalidPart = validateInput($("#sideTo").val());
        if (invalidPart === "") {
            $("#sideToSlider").slider("option", "value", $("#sideTo").val());
        }
    });

    /**
     * This program follows the model of the code we were told to use as a guideline
     **/

    $('#form').submit(function (e) {
        if ($(this).valid()) {
            generateMultiplicationTableTab();
            return false; // prevents screen refresh
        }
    });

    $("#form").validate({
        // These are the rules I am subscribing to for the form
        rules: {
            topFrom: {
                required: true,
                number: true
            },
            topTo: {
                required: true,
                number: true
            },
            sideFrom: {
                required: true,
                number: true
            },
            sideTo: {
                required: true,
                number: true
            }
        },

        // This is how I handle errors when they occur
        messages: {
            topFrom: {
                required: function () {
                    tblValidator.highlightError("topFrom");
                    return "<br>Enter a value for From at the top";
                },
                number: function () {
                    tblValidator.highlightError("topFrom");
                    return "<br>Enter a valid number for From at the top";
                }
            },
            topTo: {
                required: function () {
                    tblValidator.highlightError("topTo");
                    return "<br>Enter a value for To at the top";
                },
                number: function () {
                    tblValidator.highlightError("topTo");
                    return "<br>Enter a valid number for To at the top";
                }
            },
            sideFrom: {
                required: function () {
                    tblValidator.highlightError("sideFrom");
                    return "<br>Enter a value for From on the side";
                },
                number: function () {
                    tblValidator.highlightError("sideFrom");
                    return "<br>Enter a valid number for From on the side";
                }
            },
            sideTo: {
                required: function () {
                    tblValidator.highlightError("sideTo");
                    return "<br>Enter a value for To on the side";
                },
                number: function () {
                    tblValidator.highlightError("sideTo");
                    return "<br>Enter a valid number for To on the side";
                }
            }
        },

        // Make the error visible
        errorPlacement: function (error, element) {
            $(error).appendTo($("#form"));
        },
        success: function (error, element) {
            $(element).css({ "border": "" });
        }
    });
});