var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1,car2,car3,car4,cars;
var carra, carrr, carb,carbl,ground,pista;

function preload(){
 carra=loadImage("images/car1.png");
 carrr=loadImage("images/car2.png");
 carb=loadImage("images/car3.png");
 carbl=loadImage("images/car4.png");
 ground=loadImage("images/ground.png");
 pista=loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-169,displayHeight-270);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState===2){
     game.end() 
    }
  }
