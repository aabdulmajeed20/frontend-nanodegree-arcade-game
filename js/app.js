var TILE_WIDTH = 101, TILE_HEIGHT = 83;


// Enemies our player must avoid
var Enemy = function(loc, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = loc;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed * dt * 100;
    if(this.x > 500)
    this.x = -100;  
    if((player.x <= (this.x + 50) && player.x >= (this.x - 50)) && this.y === player.y){
        player.resetPlayer();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
};

Player.prototype.update = function() {
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPlayer = function() {
    this.x = 200;
    this.y = 380;
};

Player.prototype.handleInput = function(keyCode) {
    if(keyCode === 'up'){
        this.y -= TILE_HEIGHT;
        if(this.y < 50)
        this.y = 380;
    }
    if(keyCode === 'down'){
        if(this.y < 380)
        this.y += TILE_HEIGHT;
    }
    if(keyCode === 'right'){
        if(this.x < 400)
        this.x += TILE_WIDTH;
        
    }
    if(keyCode === 'left'){
        if(this.x > 0)
        this.x -= TILE_WIDTH;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(220,2);
var enemy2 = new Enemy(140,6);
var enemy3 = new Enemy(60,5);
var enemy4 = new Enemy(220,3);
var allEnemies = [enemy1,enemy2,enemy3,enemy4];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
