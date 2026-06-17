
let mic,slider,mode=1;
function setup(){
createCanvas(windowWidth,windowHeight);
mic=new p5.AudioIn(); mic.start();
createP('Sensibilidade');
slider=createSlider(1,20,8);
createButton('Voltar').mousePressed(()=>location='../index.html');
}
function draw(){
background(0,40);
let v=mic.getLevel()*slider.value()*1500;
stroke(255); noFill();
translate(width/2,height/2);
if(mode==1) ellipse(0,0,v,v);
if(mode==2){beginShape();for(let a=0;a<TWO_PI;a+=0.1){vertex(cos(a)*(100+v),sin(a)*(100+v));}endShape(CLOSE);}
if(mode==3){for(let i=0;i<80;i++) point(random(-v,v),random(-v,v));}
resetMatrix();
fill(255); noStroke();
text('Teclas 1,2,3 mudam visualização',20,25);
}
function keyPressed(){if('123'.includes(key)) mode=int(key);}
function windowResized(){resizeCanvas(windowWidth,windowHeight);}
