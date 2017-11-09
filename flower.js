var fg, bg;
var frame=0;
var fetal=5;
function setup() { 
  createCanvas(600, 600);
	fg=createGraphics(width,height);
	bg=createGraphics(width,height);
	background(0);
	bg.background(0,0);
	fg.background(0,0);
	bg.noStroke();
	fg.noStroke();
//	noCursor();
} 

function draw() {
	leaf_layer();
	flower_layer();
	image(bg,0,0);
	image(fg,0,0);
}
function leaf_layer()
{
	bg.push();
	bg.translate(random(bg.width),random(bg.height));
	bg.rotate(random(TWO_PI));
	leaf(bg);
	bg.pop();
}
function flower_layer()
{
	if(mouseIsPressed)
	{
		var mover=createVector(mouseX,mouseY);
		mover.sub(pmouseX,pmouseY);
		fg.push();
		fg.translate(mouseX,mouseY);
		fg.rotate(mover.heading());
		var brushSize=sin(radians(frame*12));
		flower(fg,brushSize,frame);
		fg.pop();
		frame++;
	}
}
function flower(pg,size,frame)
{
	if(frame%2==0) pg.fill("#f9a8f5");
	else pg.fill("#ffe6fe");
	for(var i=0;i<fetal;i++)
	{
		pg.rotate(TWO_PI/fetal);
		pg.ellipse(0,20*size,15*size,30*size);
	}
	pg.fill("#ffda68")
	pg.ellipse(0,0,20*size,20*size);
}
function leaf(pg)
{
	if(frameCount%2==0) pg.fill("#44D238");
	else pg.fill("#299C1F");
	pg.arc(10,0,40,40,radians(120),radians(240),CHORD);
	pg.arc(-10,0,40,40,radians(-60),radians(60),CHORD);
}
function keyPressed()
{
	if(key==' ')
	{
		background(0);
		fg.clear();
		bg.clear();
	}
	if(keyCode==UP_ARROW&&fetal<12) fetal++;
	if(keyCode==DOWN_ARROW&&fetal>3) fetal--;
}
