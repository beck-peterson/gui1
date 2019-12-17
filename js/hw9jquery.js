/* Copyright (CC BY-NC) 2019 by Beck A. Peterson. */
/* Beck A. Peterson */
/* beck_peterson@student.uml.edu */
/* I am affiliated as a student at UMass Lowell in course 91.61 GUI Programming I */
/* File created on 12/17/19 */


$(document).ready(function () {

    class Bag {
        constructor() {
            this.tiles = [];
            this.addTiles(9, "A", 1, null);
            this.addTiles(2, "B", 3, null);
            this.addTiles(2, "C", 3, null);
            this.addTiles(4, "D", 2, null);
            this.addTiles(12, "E", 1, null);
            this.addTiles(2, "F", 4, null);
            this.addTiles(3, "G", 2, null);
            this.addTiles(2, "H", 4, null);
            this.addTiles(9, "I", 1, null);
            this.addTiles(1, "J", 8, null);
            this.addTiles(1, "K", 5, null);
            this.addTiles(4, "L", 1, null);
            this.addTiles(2, "M", 3, null);
            this.addTiles(6, "N", 1, null);
            this.addTiles(8, "O", 1, null);
            this.addTiles(2, "P", 3, null);
            this.addTiles(1, "Q", 10, null);
            this.addTiles(6, "R", 1, null);
            this.addTiles(4, "S", 1, null);
            this.addTiles(6, "T", 1, null);
            this.addTiles(4, "U", 1, null);
            this.addTiles(2, "V", 4, null);
            this.addTiles(2, "W", 4, null);
            this.addTiles(1, "X", 8, null);
            this.addTiles(2, "Y", 4, null);
            this.addTiles(1, "Z", 10, null);
            this.addTiles(2, "Blank", 0, null);
            this.shakeBag();
        }

        addTiles(number, char, value, image) {
            for (var i = 0; i < number; i++) {
                this.tiles.push(new Tile(char, value, image));
            }
        }

        shakeBag() {
            for (var i = 0; i < this.tiles.length; i++) {
                var j = Math.floor(Math.random() * (this.tiles.length - i)) + i;
                var temp = this.tiles[j];
                this.tiles[j] = this.tiles[i];
                this.tiles[i] = temp;
            }
        }

        getTile() {
            return this.tiles.pop();
        }
    }

    class Tile {
        constructor(char, value, image) {
            this.char = char;
            this.value = value;
            this.image = image;
        }
    }

    var bag = new Bag();
    $(".holder").each(function () {
        var tile = bag.getTile();
        $(this).append("<img src=\"https://beck-peterson.github.io/gui1/gui1/hw9/Scrabble_Tile_" + tile.char + ".jpg\" width=\"64\" height=\"64\" class=\"draggable value" + tile.value + "\"/>");
    });

    var currentScore = 0, highScore = 0, currentMultiplier = 1;
    $(".board").each(function () {
        $(this).on("drop", function (event, ui) {
            currentScore += 1;
        });

        $(this).on("dropout", function (event, ui) {
            currentScore -= 1;
        });
    });

    $(".doubleLetter").each(function () {
        $(this).on("drop", function (event, ui) {
            currentScore += 2;
        });

        $(this).on("dropout", function (event, ui) {
            currentScore -= 2;
        });
    });

    $(".doubleWord").each(function () {
        $(this).on("drop", function (event, ui) {
            currentMultiplier *= 2;
        });

        $(this).on("dropout", function (event, ui) {
            currentMultiplier /= 2;
        });
    });

    $(".board, .doubleLetter").each(function () {
        $(this).on("drop", function (event, ui) {
            $("#currentScore").text("Current score: " + (currentScore * currentMultiplier));
            if (currentScore * currentMultiplier > highScore) {
                highScore = currentScore * currentMultiplier;
            }
            console.log(currentScore * currentMultiplier);
        });

        $(this).on("dropout", function (event, ui) {
            $("#currentScore").text("Current score: " + (currentScore * currentMultiplier));
            if (currentScore * currentMultiplier > highScore) {
                highScore = currentScore * currentMultiplier;
            }
            console.log(currentScore * currentMultiplier);
        });
    })

    $(".draggable").draggable({ snap: ".dropLocation", snapMode: "inner" });
    $(".dropLocation").droppable({
        over: function (event, ui) {

        },

        out: function (event, ui) {

        }
    });

});