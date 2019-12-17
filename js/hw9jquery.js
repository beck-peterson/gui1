/* Copyright (CC BY-NC) 2019 by Beck A. Peterson. */
/* Beck A. Peterson */
/* beck_peterson@student.uml.edu */
/* I am affiliated as a student at UMass Lowell in course 91.61 GUI Programming I */
/* File created on 12/17/19 */


$(document).ready(function () {

    class Bag {
        var tiles = [];
        constructor() {
            addTiles(9, "A", 1, null);
            addTiles(2, "B", 3, null);
            addTiles(2, "C", 3, null);
            addTiles(4, "D", 2, null);
            addTiles(12, "E", 1, null);
            addTiles(2, "F", 4, null);
            addTiles(3, "G", 2, null);
            addTiles(2, "H", 4, null);
            addTiles(9, "I", 1, null);
            addTiles(1, "J", 8, null);
            addTiles(1, "K", 5, null);
            addTiles(4, "L", 1, null);
            addTiles(2, "M", 3, null);
            addTiles(6, "N", 1, null);
            addTiles(8, "O", 1, null);
            addTiles(2, "P", 3, null);
            addTiles(1, "Q", 10, null);
            addTiles(6, "R", 1, null);
            addTiles(4, "S", 1, null);
            addTiles(6, "T", 1, null);
            addTiles(4, "U", 1, null);
            addTiles(2, "V", 4, null);
            addTiles(2, "W", 4, null);
            addTiles(1, "X", 8, null);
            addTiles(2, "Y", 4, null);
            addTiles(1, "Z", 10, null);
            addTiles(2, "_", 0, null);
            shakeBag();
        }

        function addTiles(number, char, value, image) {
            var i;
            for (i = 0; i < number; i++) {
                tiles.push(new Tile(char, value, image));
            }
        }

        function shakeBag() {
            var i;
            for (i = 0; i < tiles.length; i++) {
                var j = Math.floor(Math.random() * (tiles.length - i)) + i;
                var temp = tiles[j];
                tiles[j] = tiles[i];
                tiles[i] = temp;
            }
        }

        function getTile() {
            return tiles.pop();
        }
    }

    class Tile {
        var char, value, image;
        constructor(char, value, image) {
            this.char = char;
            this.value = value;
            this.image = image;
        }
    }

    var bag = new Bag();
    var i;
    for (i = 0; i < 20; i++) {
        console.log(bag.getTile().char);
    }

});