/* Copyright (CC BY-NC) 2019 by Beck A. Peterson. */
/* Beck A. Peterson */
/* beck_peterson@student.uml.edu */
/* I am affiliated as a student at UMass Lowell in course 91.61 GUI Programming I */
/* File created on 12/1/19 */

$(document).ready(function () {

    /*

    I searched all over the website that she linked in the pdf and nowhere could I find a validator.
    Instead I wrote my own that has advanced error output.

    */

    function validateInput(input) {
        if (input === "") return "<empty>";
        return input.replace(/^-?\d+/, ""); // Replaces a valid possitive or negative integer, and returns the rest (the rest would be invalid input)
    }

    $("#topFrom").keyup(function () {
        var invalidPart = validateInput($("#topFrom").val());
        if (invalidPart === "") { // If the input is valid, display no warnings
            $("#topFromWarning").text("");
            $("#topFrom").removeClass("warning");
        } else { // If the input is invalid, show the invalid field and display the section of code that is invalid
            $("#topFromWarning").text("Top From: '" + invalidPart + "' not recognized, please only enter a valid number");
            $("#topFrom").addClass("warning");
        }
    });

    // The rest of the functions follow the same paradigm as the last one
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