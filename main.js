"use strict";

var HEIGHT = 100;
var DIMENSION = 7;
var emptyTop = "300px";
var emptyLeft = "300px";

window.onload = function() {
	makeGrid();
	var tiles = document.querySelectorAll('#grid div');
		for (var i = 0; i < tiles.length; i++) {
			tiles[i].onmouseover = check;
			tiles[i].onmouseout = remove;
		}
}

function makeGrid() {
	for (var i = 1; i <= DIMENSION * DIMENSION; i++) {
			var tile = document.createElement("div");
			var left = (i - 1) % DIMENSION * HEIGHT;
			var top = parseInt((i - 1) / DIMENSION) * HEIGHT;
			//tile.innerHTML = i;
			tile.style.backgroundPosition = - left + "px " + - top + "px";
			tile.style.top = top + "px";
			tile.style.left = left + "px";
			document.getElementById("grid").appendChild(tile);
		}
}

function check() {
	this.classList.add("highlight");
}

function remove() {
	this.classList.remove("highlight");
}