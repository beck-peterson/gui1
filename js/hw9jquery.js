/* Copyright (CC BY-NC) 2019 by Beck A. Peterson. */
/* Beck A. Peterson */
/* beck_peterson@student.uml.edu */
/* I am affiliated as a student at UMass Lowell in course 91.61 GUI Programming I */
/* File created on 12/17/19 */


$(document).ready(function () {

    // This is the bag that contains all the tiles. When you draw tiles they come out in a random order
    class Bag {
        constructor() {
            this.tiles = [];
            this.addTiles(9, "A", 1);
            this.addTiles(2, "B", 3);
            this.addTiles(2, "C", 3);
            this.addTiles(4, "D", 2);
            this.addTiles(12, "E", 1);
            this.addTiles(2, "F", 4);
            this.addTiles(3, "G", 2);
            this.addTiles(2, "H", 4);
            this.addTiles(9, "I", 1);
            this.addTiles(1, "J", 8);
            this.addTiles(1, "K", 5);
            this.addTiles(4, "L", 1);
            this.addTiles(2, "M", 3);
            this.addTiles(6, "N", 1);
            this.addTiles(8, "O", 1);
            this.addTiles(2, "P", 3);
            this.addTiles(1, "Q", 10);
            this.addTiles(6, "R", 1);
            this.addTiles(4, "S", 1);
            this.addTiles(6, "T", 1);
            this.addTiles(4, "U", 1);
            this.addTiles(2, "V", 4);
            this.addTiles(2, "W", 4);
            this.addTiles(1, "X", 8);
            this.addTiles(2, "Y", 4);
            this.addTiles(1, "Z", 10);
            this.addTiles(2, "Blank", 0);
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

    // This is the tile with its associated character and value
    class Tile {
        constructor(char, value) {
            this.char = char;
            this.value = value;
        }
    }

    // this starts off by giving the player 7 tiles
    var bag = new Bag();
    $(".holder").each(function () {
        var tile = bag.getTile();
        if (tile != undefined) {
            $(this).append("<img src=\"https://beck-peterson.github.io/gui1/gui1/hw9/Scrabble_Tile_" + tile.char + ".jpg\" style=\"pointer-events:auto;\" width=\"64\" height=\"64\" class=\"draggable value" + tile.value + "\"/>");
        }
    });

    // this will give the player 7 new tiles until the bag runs out
    $("#newTiles").click(function () {
        currentScore = 0;
        currentMultiplier = 1;
        $("#currentScore").text("Current Score: " + (currentScore * currentMultiplier));
        $(".holder img").remove();
        $(".holder").each(function () {
            var tile = bag.getTile();
            if (tile != undefined) {
                $(this).append("<img src=\"https://beck-peterson.github.io/gui1/gui1/hw9/Scrabble_Tile_" + tile.char + ".jpg\" style=\"pointer-events:auto;\" width=\"64\" height=\"64\" class=\"draggable value" + tile.value + "\"/>");
            }
        });
        // These reset the tiles and boards to be back to how they were for the new tiles
        $(".board, .doubleLetter").each(function () {
            var tileVal = 0;
            if ($(this).hasClass("value1")) {
                tileVal = 1;
            } else if ($(this).hasClass("value2")) {
                tileVal = 2;
            } else if ($(this).hasClass("value3")) {
                tileVal = 3;
            } else if ($(this).hasClass("value4")) {
                tileVal = 4;
            } else if ($(this).hasClass("value5")) {
                tileVal = 5;
            } else if ($(this).hasClass("value6")) {
                tileVal = 6;
            } else if ($(this).hasClass("value8")) {
                tileVal = 8;
            } else if ($(this).hasClass("value10")) {
                tileVal = 10;
            } else if ($(this).hasClass("value16")) {
                tileVal = 16;
            } else if ($(this).hasClass("value20")) {
                tileVal = 20;
            }
            $(this).removeClass("value" + tileVal);
        });
        $(".dropLocation").droppable("option", "accept", ".draggable"); // assisted by Likwid_T from https://stackoverflow.com/questions/3948447/jquery-ui-droppable-only-accept-one-draggable);
        $(".draggable").draggable({ snap: ".dropLocation", snapMode: "inner" });
    });

    // this will reset the game and make a new bag
    $("#newBag").click(function () {
        bag = new Bag();
        highScore = 0;
        currentScore = 0;
        currentMultiplier = 1;
        $("#currentScore").text("Current Score: " + (currentScore * currentMultiplier));
        $("#highScore").text("High Score: " + highScore);
        $(".holder img").remove();
        $(".holder").each(function () {
            var tile = bag.getTile();
            if (tile != undefined) {
                $(this).append("<img src=\"https://beck-peterson.github.io/gui1/gui1/hw9/Scrabble_Tile_" + tile.char + ".jpg\" style=\"pointer-events:auto;\" width=\"64\" height=\"64\" class=\"draggable value" + tile.value + "\"/>");
            }
        });
        // These reset the tiles and boards to be back to how they were for the new tiles
        $(".board, .doubleLetter").each(function () {
            var tileVal = 0;
            if ($(this).hasClass("value1")) {
                tileVal = 1;
            } else if ($(this).hasClass("value2")) {
                tileVal = 2;
            } else if ($(this).hasClass("value3")) {
                tileVal = 3;
            } else if ($(this).hasClass("value4")) {
                tileVal = 4;
            } else if ($(this).hasClass("value5")) {
                tileVal = 5;
            } else if ($(this).hasClass("value6")) {
                tileVal = 6;
            } else if ($(this).hasClass("value8")) {
                tileVal = 8;
            } else if ($(this).hasClass("value10")) {
                tileVal = 10;
            } else if ($(this).hasClass("value16")) {
                tileVal = 16;
            } else if ($(this).hasClass("value20")) {
                tileVal = 20;
            }
            $(this).removeClass("value" + tileVal);
        });
        $(".dropLocation").droppable("option", "accept", ".draggable"); // assisted by Likwid_T from https://stackoverflow.com/questions/3948447/jquery-ui-droppable-only-accept-one-draggable);
        $(".draggable").draggable({ snap: ".dropLocation", snapMode: "inner" });
    });

    var currentScore = 0, highScore = 0, currentMultiplier = 1;
    $(".board").each(function () {
        // This prevents scores from going out of control incase something goes wrong with the code
        $(this).on("drop", function (event, ui) {
            var tileVal = 0;
            if ($(this).hasClass("value1")) {
                tileVal = 1;
            } else if ($(this).hasClass("value2")) {
                tileVal = 2;
            } else if ($(this).hasClass("value3")) {
                tileVal = 3;
            } else if ($(this).hasClass("value4")) {
                tileVal = 4;
            } else if ($(this).hasClass("value5")) {
                tileVal = 5;
            } else if ($(this).hasClass("value8")) {
                tileVal = 8;
            } else if ($(this).hasClass("value10")) {
                tileVal = 10;
            }
            currentScore -= tileVal;
            $(this).removeClass("value" + tileVal);
            // Each board holds the value of the tile to know how to affect the score
            if (ui.draggable.hasClass("value1")) {
                tileVal = 1;
            } else if (ui.draggable.hasClass("value2")) {
                tileVal = 2;
            } else if (ui.draggable.hasClass("value3")) {
                tileVal = 3;
            } else if (ui.draggable.hasClass("value4")) {
                tileVal = 4;
            } else if (ui.draggable.hasClass("value5")) {
                tileVal = 5;
            } else if (ui.draggable.hasClass("value8")) {
                tileVal = 8;
            } else if (ui.draggable.hasClass("value10")) {
                tileVal = 10;
            }
            currentScore += tileVal;
            $(this).addClass("value" + tileVal);
        });

        $(this).on("dropout", function (event, ui) {
            // This changes the score when a tile is removed
            var tileVal = 0;
            if ($(this).hasClass("value1")) {
                tileVal = 1;
            } else if ($(this).hasClass("value2")) {
                tileVal = 2;
            } else if ($(this).hasClass("value3")) {
                tileVal = 3;
            } else if ($(this).hasClass("value4")) {
                tileVal = 4;
            } else if ($(this).hasClass("value5")) {
                tileVal = 5;
            } else if ($(this).hasClass("value8")) {
                tileVal = 8;
            } else if ($(this).hasClass("value10")) {
                tileVal = 10;
            }
            currentScore -= tileVal;
            $(this).removeClass("value" + tileVal);
        });
    });

    // this does the same as the board, but each tile holds double the weight
    $(".doubleLetter").each(function () {
        $(this).on("drop", function (event, ui) {
            var tileVal = 0;
            if ($(this).hasClass("value2")) {
                tileVal = 2;
            } else if ($(this).hasClass("value4")) {
                tileVal = 4;
            } else if ($(this).hasClass("value6")) {
                tileVal = 6;
            } else if ($(this).hasClass("value8")) {
                tileVal = 8;
            } else if ($(this).hasClass("value10")) {
                tileVal = 10;
            } else if ($(this).hasClass("value16")) {
                tileVal = 16;
            } else if ($(this).hasClass("value20")) {
                tileVal = 20;
            }
            currentScore -= tileVal;
            $(this).removeClass("value" + tileVal);
            if (ui.draggable.hasClass("value1")) {
                tileVal = 2;
            } else if (ui.draggable.hasClass("value2")) {
                tileVal = 4;
            } else if (ui.draggable.hasClass("value3")) {
                tileVal = 6;
            } else if (ui.draggable.hasClass("value4")) {
                tileVal = 8;
            } else if (ui.draggable.hasClass("value5")) {
                tileVal = 10;
            } else if (ui.draggable.hasClass("value8")) {
                tileVal = 16;
            } else if (ui.draggable.hasClass("value10")) {
                tileVal = 20;
            }
            currentScore += tileVal;
            $(this).addClass("value" + tileVal);
        });

        $(this).on("dropout", function (event, ui) {
            var tileVal = 0;
            if ($(this).hasClass("value2")) {
                tileVal = 2;
            } else if ($(this).hasClass("value4")) {
                tileVal = 4;
            } else if ($(this).hasClass("value6")) {
                tileVal = 6;
            } else if ($(this).hasClass("value8")) {
                tileVal = 8;
            } else if ($(this).hasClass("value10")) {
                tileVal = 10;
            } else if ($(this).hasClass("value16")) {
                tileVal = 16;
            } else if ($(this).hasClass("value20")) {
                tileVal = 20;
            }
            currentScore -= tileVal;
            $(this).removeClass("value" + tileVal);
        });
    });

    $(".doubleWord").each(function () {
        // This keeps track of the overall multiplier if the player uses a double word score
        $(this).on("drop", function (event, ui) {
            currentMultiplier *= 2;
        });

        $(this).on("dropout", function (event, ui) {
            if ($(this).hasClass("draggingFalse")) {
                currentMultiplier /= 2;
            }
        });
    });

    // This updates the current score and high score for any tile that is played on
    $(".board, .doubleLetter").each(function () {
        $(this).on("drop", function (event, ui) {
            if (currentScore * currentMultiplier > highScore) {
                highScore = currentScore * currentMultiplier;
            }
            $("#currentScore").text("Current Score: " + (currentScore * currentMultiplier));
            $("#highScore").text("High Score: " + highScore);
        });

        $(this).on("dropout", function (event, ui) {
            if (currentScore * currentMultiplier > highScore) {
                highScore = currentScore * currentMultiplier;
            }
            $("#currentScore").text("Current Score: " + (currentScore * currentMultiplier));
            $("#highScore").text("High Score: " + highScore);
        });
    })

    // This makes the tiles draggable and the board spaces droppable for one tile at a time
    $(".draggable").draggable({ snap: ".dropLocation", snapMode: "inner" });
    $(".dropLocation").droppable({
        drop: function (event, ui) {
            $(this).droppable("option", "accept", ui.draggable); // assisted by Likwid_T from https://stackoverflow.com/questions/3948447/jquery-ui-droppable-only-accept-one-draggable
        },

        out: function (event, ui) {
            $(this).droppable("option", "accept", ".draggable"); // assisted by Likwid_T from https://stackoverflow.com/questions/3948447/jquery-ui-droppable-only-accept-one-draggable
        }
    });

});