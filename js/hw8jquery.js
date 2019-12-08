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

    /**
     * This program follows the model of the code we were told to use as a guideline
     **/

    onSubmit();

    $('#form').submit(function (e) {
        if ($(this).valid()) {
            generateMultiplicationTable();
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