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
    constructor(health, place) {
        this._health = health;
        this._place = place;
    }
    
    get health() {
        return this._health;    
    }  
    
    reduceHealth(amount) {
        this._health -= amount;   
        if (this._health <= 0) {
            this.place = undefined; // removes unit from the game    
        }
    }
}

class Place {
    constructor() {
            
    }
}

class PM extends Unit {
    
}

