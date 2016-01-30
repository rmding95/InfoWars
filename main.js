"use strict";

var HEIGHT = 100;
var DIMENSION = 7;
var emptyTop = "300px";
var emptyLeft = "300px";
var gridList = [];

class Player {
    constructor(money, name) {
        this._name = name;
        this._money = money;
        this._units = [];
    }
    
    get money() {
        return this._money;    
    }
    
    get name() {
        return this._name;   
    }
    
    increaseMoney(amount) {
        this._money += amount;    
    }
}

class Unit {
    constructor(health, attack, square) {
        this._health = health;
        this._attack = attack;
        this._square = square;
    }
    
    get health() {
        return this._health;    
    }  
    
    get attack() {
        return this._attack;    
    }
    
    reduceHealth(amount) {
        this._health -= amount;   
        if (this._health <= 0) {
            this.square = undefined; // removes unit from the game    
        }
    }
    
    engage(target) {
        target.reduceHealth(this._attack);
    }
}

/*
class Intern extends Unit {
    constructor() {
        super(4, 1);
        this._name = 'Intern';
    }
}

class Manager extends Unit {
    constructor() {
        super(4, 1)
        this._name = 'Manager';
    }
}

class Programmer extends Unit {
    constructor() {
        super(4, 1)
        this._name = 'Programmer';
    }
}
*/

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
        return this._x;
    }

    getY() {
        return this._y;

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

    /*
var Units = {

  Intern : class extends Unit {
    constructor() {
      super(4,1);
      this._name = 'Intern'; 
    }
    
    act() {

    }
  },
  
  Manager : class extends Unit {
    constructor()  {
      super(4,1);
      this._name = 'Manager';
    }
  
    act() {

      }        
    },
    
  Programmer : class extends Unit {
    constructor()  {
      super(4,1);
      this._name = 'Programmer';
    }
  
    act() {

      }        
    }
  } */ 
    
}
