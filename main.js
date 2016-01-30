"use strict";

var HEIGHT = 100;
var DIMENSION = 7;
var emptyTop = "300px";
var emptyLeft = "300px";
var gridList = [];

class Player {
    constructor(name, money) {
        this._name = name;
        this._money = money;
        this._units = [];
    }
    
    get name() {
        return this._name;   
    }
    
    get money() {
        return this._money;    
    }
}

class Unit {
    constructor(health, place, attack) {
        this._health = health;
        this._place = place;
        this._attack = attack;
    }
    
    get health() {
        return this._health;    
    }  
    
    reduceHealth(amount) {
        this._health -= amount;   
        if (this._health <= 0) {
            this.square = undefined; // removes unit from the game    
        }
    }
}

class Factory {
    constructor(square) {
        this._square = square;        
    }
    
    get square() {
     return this._square;   

class Square {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    getId() {
        return (x * DIMENSION) + (y + 1);
    }

    getX() {
        return x;
    }

    getY() {
        return y;

    }
}

class Game {
    constructor() {
        this._turn = turn;    
    }
    endTurn() {
        
    }
    
    get turn() {
        return this._turn;   
    }
    
}

class intern extends Unit {
    
}

var HEIGHT = 100;
var DIMENSION = 7;
var emptyTop = "300px";
var emptyLeft = "300px";

window.onload = function() {
	makeGrid();
    populateGrid();
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
            tile.id = i;
			document.getElementById("grid").appendChild(tile);
		}
}

function check() {
	this.classList.add("highlight");
}

function remove() {
	this.classList.remove("highlight");
}

function populateGrid() {
    
}

function startGame() {
    
//sets up initial game state, both players get factories in the corner
function populateGrid() {
    for (var i = 0; i < DIMENSION; i++) {
        for (var j = 0; j < DIMENSION; j++) {
            var square = new Square(i, j);
            gridList.push(square);
            //console.log(gridList);
        }
    }
    for (var i = 0; i < gridList.length; i++) {
        console.log(gridList[i].x);
        //if (gridList[i])
    }
}
