/* Copyright (CC BY-NC) 2019 by Beck A. Peterson. */
/* Beck A. Peterson */
/* beck_peterson@student.uml.edu */
/* I am affiliated as a student at UMass Lowell in course 91.61 GUI Programming I */
/* File created on 12/1/19 */

$(document).ready(function () {

    function validateInput(input) {
        if (input === "") return "<empty>";
        return input.replace(/^-?\d+$/gi, "");
    }

    $("#topFrom").keyup(function () {
        var invalidPart = validateInput($("#topFrom").val());
        if (invalidPart === "") {
            $("#topFromWarning").text("");
            $("#topFrom").removeClass("warning");
        } else {
            $("#topFromWarning").text("Top From: '" + invalidPart + "' not recognized, please only enter a valid number");
            $("#topFrom").addClass("warning");
        }
    });

    $("#topTo").keyup(function () {
        var invalidPart = validateInput($("#topTo").val());
        if (invalidPart === "") {
            $("#topToWarning").text("");
            $("#topTo").removeClass("warning");
        } else {
            $("#topToWarning").text("Top To: '" + invalidPart + "' not recognized, please only enter a valid number");
            $("#topTo").addClass("warning");
        }
    });

    $("#sideFrom").keyup(function () {
        var invalidPart = validateInput($("#sideFrom").val());
        if (invalidPart === "") {
            $("#sideFromWarning").text("");
            $("#sideFrom").removeClass("warning");
        } else {
            $("#sideFromWarning").text("Side From: '" + invalidPart + "' not recognized, please only enter a valid number");
            $("#sideFrom").addClass("warning");
        }
    });

    $("#sideTo").keyup(function () {
        var invalidPart = validateInput($("#sideTo").val());
        if (invalidPart === "") {
            $("#sideToWarning").text("");
            $("#sideTo").removeClass("warning");
        } else {
            $("#sideToWarning").text("Side To: '" + invalidPart + "' not recognized, please only enter a valid number");
            $("#sideTo").addClass("warning");
        }
    });
});