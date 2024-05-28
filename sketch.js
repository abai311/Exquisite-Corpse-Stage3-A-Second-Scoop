

let scoopY = 600; 
let iceCreamY = 600; 
let vanButton,chocButton,strawButton,reSetButton;
let line = 0;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  drawButtons();

  chocCounter = 0;
  strawCounter = 0;
  vanCounter = 0;
  layerHeight = 100;
  flavourHistory = [];
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function icecream(x, y, size, colour){     //starting icecream
  strokeWeight(1);
  stroke(51);
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);  //Cone
  fill(colour);    
  ellipseMode(CORNER);  //first scooop
  ellipse(x, y - 35, 40, 41);
}

function drawButtons(){
  vanButton = createButton('VANILLA');
  vanButton.position(20, 20);    //vanilla button
  vanButton.size (110,50);
  vanButton.mousePressed(addVanScoop);

  chocButton = createButton('CHOCOLATE');
  chocButton.position(vanButton.x , vanButton.y + 60);   //chocolate button
  chocButton.size (110,50);
  chocButton.mousePressed(addChocScoop);

  strawButton = createButton('STRAWBERRY');
  strawButton.position(vanButton.x , vanButton.y + 120);  //strawberry button
  strawButton.size (110,50);
  strawButton.mousePressed(addStrawScoop);

  reSetButton = createButton('NEW ICECREAM');
  reSetButton.position(vanButton.x , vanButton.y + 190);  //strawberry button
  reSetButton.size (110,50);
  reSetButton.mousePressed(resetIcecream);
}


function addVanScoop() {  // vanilla scoop
 
  scoopY -= 37;
  strokeWeight(1);
  stroke(51);
  fill(245, 242, 235);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  vanCounter++;
}

function addChocScoop() {   //chocolate scoop
 
  scoopY -= 37;
  strokeWeight(1);
  stroke(51);
  fill(89, 52, 38);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  chocCounter++;
}
function addStrawScoop() {   // strawberry scoop
 
  scoopY -= 37;
  strokeWeight(1);
  stroke(51);
  fill(232, 172, 209);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  strawCounter++;
}



function draw(){
 
  icecream(width/2, iceCreamY, 30, color(245, 242, 235)); //starting cone
  

  if (scoopY < 40) {   
  

    GameOver() ;  
    hideButtons();  //hides buttons
    startAgain();
    
  }
}
 

function GameOver(){ // makes coloured lines down the screen when icecream gets too high

  noStroke();

  fill(245, 242, 235);
  rect(0,0,width/3,line);
  
  fill(89, 52, 35);
  rect(width/3, 0, width/3,line);

  fill(232, 172, 209);
  rect(width/3 + width/3, 0, width/3,line);

  line += 10;

}

function hideButtons(){  // hides buttons

  vanButton.hide();
  chocButton.hide();
  strawButton.hide();
  //reSetButton.hide();

}

function resetIcecream (){     // resets icecream 
    background(50);
    icecream(width/2, iceCreamY, 30, color(255));
    scoopY = iceCreamY - 5;
    line = 0;
    drawButtons();


    if(chocCounter>vanCounter && chocCounter>strawCounter){
      flavourHistory.push("choc");
      
      //fill(89, 52, 38);
    }
    else if(strawCounter>chocCounter && strawCounter>vanCounter){
      flavourHistory.push("straw");
      
      //fill(232, 172, 209);
    }
    else{
      flavourHistory.push("van");
      
      //fill(245, 242, 235);
    }
    //generations++;
    //fill(255);
    //text(str(flavourHistory.length) + " "+ flavourHistory,300,300);
    maxDiameter = sqrt(sq(width)+sq(height));
    circleX = width/2;
    circleY = height/2;
    if(flavourHistory.length>3){
      temporaryArray =[];
      for(x=flavourHistory.length-3;x<flavourHistory.length;x++){
        temporaryArray.push(flavourHistory[x]);
      }
      flavourHistory = temporaryArray;
    }
    for(x=0;x<flavourHistory.length;x++){
      if(flavourHistory[x]==="choc"){
        fill(89, 52, 38);
      }
      if(flavourHistory[x]==="straw"){
        fill(232, 172, 209);
      }
      if(flavourHistory[x]==="van"){
        fill(245, 242, 235);
      }
      ellipseMode(CENTER);
      ellipse(circleX, circleY, maxDiameter-maxDiameter*x/3);
      //rect(0,windowHeight-layerHeight*(x+1),windowWidth,layerHeight);
    }
    chocCounter = 0;
    vanCounter = 0;
    strawCounter = 0;
}


function startAgain(){  //Start again text

  let startAgain = createElement('h1','START AGAIN');
  startAgain.position(width/3,height/2);
  startAgain.style('color', 'black');
  startAgain.center();
  
}