var tblValidator = {
    highlightError: function (strVarToTest) {
        $('#' + strVarToTest).css({ "border": "2px solid red" });
        $('#' + strVarToTest).focus();
    },

    unhighlightError: function (strVarToTest) {
        $('#' + strVarToTest).css({ "border": "" });
    }
}

$(document).ready(function () {

    // This was helped by jqueryui.com

    $("#tabs").tabs();
    $("#topFromSlider").slider({ values: [-25, 50] }).width("250px").change(function () {
        $("#topFrom").val($("#topFromSlider").slider().value());
    });
    $("#topToSlider").slider({ values: [-25, 50] }).width("250px").change(function () {

    });
    $("#sideFromSlider").slider({ values: [-25, 50] }).width("250px").change(function () {

    });
    $("#sideToSlider").slider({ values: [-25, 50] }).width("250px").change(function () {

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
});