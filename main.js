"use strict";

var HEIGHT = 100;
var DIMENSION = 7;
var emptyTop = "300px";
var emptyLeft = "300px";
var gridList = [];
var playerMoney = "500";
var units = ["Intern", "Manager", "Programmer"];
var currentFactory;
var buildUnit = [];
var adjacentStyle = [];
var unitMoved;
var money = 1000;

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
        this._own = true;
        this._x;
        this._y;
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
    
    get own() {
        return this._own;    
    }

    setLocation(x, y) {
        this._x = x;
        this._y = y;
    }

    getLocation() {
        return new Square(this._x, this._y);
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
        super(6, 2, 2, 400);
        this._name = 'Programmer';
    }
}

class Manager extends Unit {
    constructor() {
        super(8, 3, 3, 650)
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
var emptyTop = "300px";
var emptyLeft = "300px";

window.onload = function() {
    document.getElementById("unitmenu").style.display = "none";
	makeGrid();
    populateGrid();
	var tiles = document.querySelectorAll('#grid div');
		for (var i = 0; i < tiles.length; i++) {
			tiles[i].onmouseover = check;
			tiles[i].onmouseout = remove;
            tiles[i].onclick = handleClick;
		}
    console.log(gridList[6]);
    console.log(adjacent(gridList[6]));
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

function adjacent(square) {
    var squares = [];
    for (var i = 0; i < gridList.length; i++) {
        if (gridList[i].getX() == square.getX() + 1 && gridList[i].getY() == square.getY() || gridList[i].getX() == square.getX() - 1 && gridList[i].getY() == square.getY() || gridList[i].getY() == square.getY() + 1 && gridList[i].getX() == square.getX() || gridList[i].getY() == square.getY() - 1 && gridList[i].getX() == square.getX()) {
            squares.push(gridList[i]);
        }
    }
    return squares;
}

/*
function adjacementTest(square, distance) {
    var squares =[];
    for (var i = 0; i < gridList.length; i++) {
        for (var j = 0; j < distance - i + 1; j++) {
            if () {
                squares.push(gridList[j]);    
            }
        }
    }
}
*/

/*
function adjacentTest(square, distance) {
    var squares = [];
    for (var i = 0; i < gridList.length; i++) {
        
    }
    for (var j = 0; i < gridList.length; i++) {
        if (gridList[i].getX() == square.getX() + 1 && gridList[i].getY() == square.getY() || gridList[i].getX() == square.getX() - 1 && gridList[i].getY() == square.getY() || gridList[i].getY() == square.getY() + 1 && gridList[i].getX() == square.getX() || gridList[i].getY() == square.getY() - 1 && gridList[i].getX() == square.getX()) {
            squares.push(gridList[j]);
        }
    }
    return squares;
}
*/
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
    var list = document.getElementById("menu");
    for (var i = 0; i < units.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = units[i];
        list.appendChild(item);
        item.onclick = buyUnit;
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
    var div = this;
    console.log(div);
    var id = this.id;
    //formulas broken for last column
    var x;
    if (id % DIMENSION == 0) {
        x = DIMENSION - 1;
    } else { 
        x = (id % DIMENSION) - 1;
    }
    var y;
    if (id == DIMENSION * DIMENSION) {
        y = DIMENSION - 1;    
    } else if (id == DIMENSION) {
        y = 0;
    } else if (id == DIMENSION * 2) {
        y = 1;    
    } else if (id == DIMENSION * 3) {
        y = 2;    
    } else if (id == DIMENSION * 4) {
        y = 3;    
    } else if (id == DIMENSION * 5) {
        y = 4;   
    } else if (id == DIMENSION *6) {
        y = 5;    
    } else {
        y = Math.floor(id / DIMENSION);        
    }
    //var x = Math.floor(id / DIMENSION);
    //var y = (id % DIMENSION) - 1;
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
        currentFactory = square;
    }
    if (square.getType() == "blank") {
        document.querySelector("#unitmenu").style.display = "none";
    }
    console.log(this.innerHTML);
    if (this.innerHTML == "P" || this.innerHTML == "M" || this.innerHTML == "I") {
        var unitName = this.innerHTML;
        var unit;
        if (unitName == "I") {
            unitMoved = "I";
            unit = new Intern();
        } else if(unitName == "M") {
            unitMoved = "M";
            unit = new Manager();
        } else if (unitName == "P") {
            unitMoved = "P";
            unit = new Programmer();
        }
        var adj = adjacent(square);
        for (var i = 0; i < adj.length; i++) {
            if (adj[i].getType() == "blank") {
                var div = document.getElementById(adj[i].getId());
                div.classList.add("available");
                div.onclick = moveUnit;
            }
        }
    }
}

function moveUnit() {
    this.innerHTML = unitMoved;
}

function buyUnit() {
    var unitName = this.innerHTML;
    var unit;
    if (unitName == "Intern") {
        unit = new Intern();
    } else if (unitName == "Manager") {
        unit = new Manager();
    } else if (unitName == "Programmer") {
        unit = new Programmer();
    } else {
        console.log("you fucked up");
    }
    buildUnit.push(unitName);
    buildUnit.push(unit);
    var tile = currentFactory;
    var adjacentTiles = adjacent(tile);
    adjacentStyle = adjacentTiles;
    console.log(adjacentTiles);
    for (var i = 0; i < adjacentTiles.length; i++) {
        var square = document.getElementById(adjacentTiles[i].getId());
        if (adjacentTiles[i].getType() == "blank") {
            square.classList.add("available");
            square.onclick = addUnit;
        }
    }
}

function addUnit() {
    if (buildUnit[0] == "Intern") {
        //this.innerHTML = "I";
        var what = 'url(internSprite.png)';
        console.log(what);
        this.style.backgroundImage = what;
    }
    if (buildUnit[0] == "Manager") {
        //this.innerHTML = "M";
        this.style.backgroundImage = 'url(ProjectManager.png)';
    }
    if (buildUnit[0] == "Programmer") {
        //this.innerHTML = "P";
        this.style.backgroundImage = 'url(ProgrammerSprite.png)';
    }
    var id = this.id;
    //formulas broken for last column
    var x;
    if (id % DIMENSION == 0) {
        x = DIMENSION - 1;
    } else { 
        x = (id % DIMENSION) - 1;
    }
    var y;
    if (id == DIMENSION * DIMENSION) {
        y = DIMENSION - 1;    
    } else if (id == DIMENSION) {
        y = 0;
    } else if (id == DIMENSION * 2) {
        y = 1;    
    } else if (id == DIMENSION * 3) {
        y = 2;    
    } else if (id == DIMENSION * 4) {
        y = 3;    
    } else if (id == DIMENSION * 5) {
        y = 4;   
    } else if (id == DIMENSION *6) {
        y = 5;    
    } else {
        y = Math.floor(id / DIMENSION);        
    }
    var unit = buildUnit[1];
    //unit.setLocation(x, y);
    for (var i = 0; i < adjacentStyle.length; i++) {
        var square = document.getElementById(adjacentStyle[i].getId());
        square.classList.remove("available");
    }
    for (var i = 0; i < gridList.length; i++) {
        if (gridList[i].getX() == x && gridList[i].getY() == y) {
            gridList[i].setType("unit");
        }
    }
    adjacentStyle = [];
    buildUnit = [];
    currentFactory = "";
    this.onclick = handleClick;
}


