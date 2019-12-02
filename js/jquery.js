
$(document).ready(function () {

    function validateInput(msg, input) {
        return input.match(/^\d+$/gi);
    }

    $("#topFrom").keyup(function () {
        if (validateInput($("#topFrom").val())) {
            $("#topFromWarning").text("");
        } else {
            $("#topFromWarning").text("Top From input is invalid, please enter a valid number");
        }
    });

    $("#topTo").keyup(function () {
        if (validateInput($("#topTo").val())) {
            $("#topToWarning").text("");
        } else {
            $("#topToWarning").text("Top To input is invalid, please enter a valid number");
        }
    });

    $("#sideFrom").keyup(function () {
        if (validateInput($("#sideFrom").val())) {
            $("#sideFromWarning").text("");
        } else {
            $("#sideFromWarning").text("Side From input is invalid, please enter a valid number");
        }
    });

    $("#sideTo").keyup(function () {
        if (validateInput($("#sideTo").val())) {
            $("#sideToWarning").text("");
        } else {
            $("#sideToWarning").text("Side To input is invalid, please enter a valid number");
        }
    });
});