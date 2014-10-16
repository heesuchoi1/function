function setup(){
	createCanvas(800,800);
	
}

function draw(){
	background(0);
	fill(255);
	ellipse(mouseX,mouseY,100,100);


	drawDonut1(25,250,200,100,100);
	drawDonut1(100,50,100,200,200);
	drawDonut1(50,50,260,400,200);
	drawDonut2();
	drawDonut3();


}

function drawDonut1(r,g,b,x,y)
{
	//doughnet #1
	fill(r,g,b);
	ellipse(x,y,200,200);
	fill(0);
	ellipse(x,y,120,120);
}

function drawDonut2()
{
	//doughnet #2
	fill(255);
	ellipse(100,200,200,200);
	fill(0);
	ellipse(100,200,120,120);

}

function drawDonut3()
{
	//doughnet #3
	fill(255);
	ellipse(200,400,200,200);
	fill(0);
	ellipse(200,400,120,120);

}

