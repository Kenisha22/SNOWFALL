const Engine=Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies

var engine,world
var backgroundimg
var snowimg
var snow
var fall=[]

function preload(){
  backgroundimg=loadImage("snow2.jpg")
  snowimg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
}

function draw() {
  background(backgroundimg); 
  Engine.update(engine) 
if(frameCount%5===0){
  fall.push(new Snow())
}
for(var i=0; i<fall.length;i++){
  fall[i].display()
}
  drawSprites();
}