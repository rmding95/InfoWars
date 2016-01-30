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
    constructor(health, attack, movement, cost) {
        this._health = health;
        this._attack = attack;
        this._movement = movement;
        this._cost = cost;
        this._canAttack = true;
        this._canMove = true;
        this._type = "unit";
    }
    
    get health() {
        return this._health;    
    }  
    
    get attack() {
        return this._attack;    
    }
    
    get movement() {
        return this._movement;   
    }
    
    get cost() {
        return this._cost;    
    }
    
    get canAttack() {
        return this._canAttack;
    }
    
    get canMove() {
        return this._canMove;    
    }
    reduceHealth(amount) {
        //this._health -= amount;   
        //if (this._health <= 0) {
            //this.square = undefined; 
        //}
    }
    
    engage(target) {
        //target.reduceHealth(this._attack);
    }
}


class Intern extends Unit {
    constructor() {
        super(4, 1, 2, 200);
        this._name = 'Intern';
    }
}

class Programmer extends Unit {
    constructor() {
        super(6, 2, 2 400)
        this._name = 'Programmer';
    }
}

class Manager extends Unit {
    constructor() {
        super(8, 3, 3, 600)
        this._name = 'Manager';
    }
}

class Factory {
    constructor(square) {
        this._square = square;
        this._type = "factory";
    }
    
    get square() {
     return this._square;
    }
}   

class Square {
    constructor(x, y, type) {
        this._x = x;
        this._y = y;
        this._type = "blank";
    }

    getId() {
        return (this._x * DIMENSION) + (this._y + 1);
    }

    getX() {
        return this._x;
    }

    getY() {
        return this._y;

    }

    getType() {
        return this._type;
    }


    //blank, factory, unit
    setType(type) {
        this._type = type;
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
            tiles[i].onclick = handleClick;
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

function startGame() {

}
    
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
        if ((gridList[i].getX() == 0 && gridList[i].getY() == 0) || (gridList[i].getX() == 6 && gridList[i].getY() == 0) || (gridList[i].getX() == 0 && gridList[i].getY() == 6) ||
            (gridList[i].getX() == 6 && gridList[i].getY() == 6)) {
            var square = gridList[i];
            square.setType("factory");
            var id = square.getId();
            var tile = document.getElementById(id);
            tile.innerHTML = "F";
        }
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
  } 
    
}*/

function handleClick() {
    var id = this.id;
    //formulas broken for last column
    var x = Math.floor(id / DIMENSION);
    var y = (id % DIMENSION) - 1;
    console.log(x);
    console.log(y);
    var square;
    for (var i = 0; i < gridList.length; i++) {
        if (gridList[i].getX() == x && gridList[i].getY() == y) {
            square = gridList[i];
        }
    }
    if (square.getType() == "factory") {
        document.querySelector("#unitmenu").style.display = "initial";
    }
    if (square.getType() == "blank") {
        document.querySelector("#unitmenu").style.display = "none";
    }
    
    if (square.getType() == "unit") {
        
    }
}

function buyUnit() {
    
}


