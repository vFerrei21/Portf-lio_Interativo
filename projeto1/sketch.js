
let img,parts=[],sizeS,countS;
function setup(){
createCanvas(windowWidth,windowHeight);
createDiv('Upload de imagem');
createFileInput(handleFile);
createDiv('Tamanho');
sizeS=createSlider(2,20,6);
createDiv('Quantidade');
countS=createSlider(100,2000,700);
createButton('Regenerar').mousePressed(makeParticles);
createButton('Voltar').mousePressed(()=>location='../index.html');
}
function makeParticles(){
parts=[];
for(let i=0;i<countS.value();i++) parts.push({x:random(width),y:random(height)});
}
function handleFile(f){
if(f.type==='image') img=loadImage(f.data,makeParticles);
}
function draw(){
background(10,20);
if(!img) {fill(255);text('Carrega uma imagem',20,30);return;}
img.loadPixels();
for(let p of parts){
p.x+=(mouseX-p.x)*0.015;
p.y+=(mouseY-p.y)*0.015;
let ix=floor(map(p.x,0,width,0,img.width-1));
let iy=floor(map(p.y,0,height,0,img.height-1));
let id=(ix+iy*img.width)*4;
fill(img.pixels[id],img.pixels[id+1],img.pixels[id+2]);
circle(p.x,p.y,sizeS.value());
}
}
function windowResized(){resizeCanvas(windowWidth,windowHeight);}
