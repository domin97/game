
 const canvas = document.querySelector('canvas'); //pobranie obiektu
 const ctx = canvas.getContext('2d'); //umieszczenie wszystkich metod do ctx
        
 canvas.width = 1000;
 canvas.height = 500;
        
const cw = canvas.width;
const ch = canvas.height;  

const ballSize = 20; //wielkosc pilki
let ballX = cw/2 - ballSize/2 //od 490 do 510
let ballY = ch/2 - ballSize/2 //od 240 do 260  

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910; //paletka komputerowa

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;
/*-----------------------------*/
function player(){
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX,playerY,paddelWidth,paddelHeight)
}
function ai(){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX,aiY,paddelWidth,paddelHeight)
}

function ball(){
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(ballX,ballY,ballSize,ballSize);
    
    ballX += ballSpeedX;
    ballY += ballSpeedY;
 }
     
function table(){
            
    ctx.fillStyle = '#000055';
    ctx.fillRect(0,0,cw,ch); //rysowanie table
    ctx.fillStyle = 'gray';
    
    for (let linePosition = 20; linePosition < ch; linePosition += 30){
        ctx.fillStyle = "grey";
        ctx.fillRect(cw/2-lineWidth/2,linePosition,lineWidth,lineHeight);
        
    }
}
 
function game(){
    table()
    ball()
    player()
    ai()   
}
    

setInterval(game, 25)
        
        
        