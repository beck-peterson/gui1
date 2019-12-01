
$(document).ready(function () {

    function validateInput(msg, input) {
        var boolValid = true;
        if (!input.match(/^\d+$/gi)) {
            boolValid = false;
        }
        return boolValid;
    }

    $("#topFrom").keypress(function () {
        if (validateInput("Top From entry", $("#topFrom").val())) {
            alert("valid");
        } else {
            alert("invalid");
        }
    });
});