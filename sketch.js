let cor;
let círculoX; //posição x
let círculoY; //posição y

//criação de novo círculo
let posicaoHorizontal2; //x
let posicaoVertical2; //x

function setup() {
  createCanvas(400, 400);
  background(32,178,170);
  cor = color(random(0,255), random(0,255), random(0,255));
  círculoX = [0,0, 0]
  círculoY = [random(height), random(height), random(height)];
  
}

function draw() {
  circle(círculoX[0], círculoY[0], 75);
  circle(círculoX[1], círculoY[1], 75);
  circle(círculoX[2], círculoY[2], 75);
  fill(cor);
  
  círculoX[0]+= random(-3,3);
  círculoY[0]+= random(-3,3);
  
  círculoX[1]+= random(-3,3);
  círculoY[1]+= random(-3,3);
  
  círculoX[2]+= random(-3,3);
  círculoY[2]+= random(-3,3);
  
  
  
    for(let contador in círculoX) {
    circle(círculoX[contador], círculoY[contador], 50);    
    círculoX[contador]+= random(0,3);
    círculoY[contador]+= random(-3,3); 
    
    if(círculoX[contador] >= width){
      círculoX[contador] = 0;
      círculoY[contador] = random(height);
    }
  }
  
   if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}