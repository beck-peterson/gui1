
$(document).ready(function () {

    function validateInput(input) {
        return input.match(/^-?\d+$/gi);
    }

    $("#topFrom").keyup(function () {
        if (validateInput($("#topFrom").val())) {
            $("#topFromWarning").text("");
            $("#topFrom").removeClass("warning");
        } else {
            $("#topFromWarning").text("Top From input is invalid, please enter a valid number");
            $("#topFrom").addClass("warning");
        }
    });

    $("#topTo").keyup(function () {
        if (validateInput($("#topTo").val())) {
            $("#topToWarning").text("");
            $("#topTo").removeClass("warning");
        } else {
            $("#topToWarning").text("Top To input is invalid, please enter a valid number");
            $("#topTo").addClass("warning");
        }
    });

    $("#sideFrom").keyup(function () {
        if (validateInput($("#sideFrom").val())) {
            $("#sideFromWarning").text("");
            $("#sideFrom").removeClass("warning");
        } else {
            $("#sideFromWarning").text("Side From input is invalid, please enter a valid number");
            $("#sideFrom").addClass("warning");
        }
    });

    $("#sideTo").keyup(function () {
        if (validateInput($("#sideTo").val())) {
            $("#sideToWarning").text("");
            $("#sideTo").removeClass("warning");
        } else {
            $("#sideToWarning").text("Side To input is invalid, please enter a valid number");
            $("#sideTo").addClass("warning");
        }
    });
});