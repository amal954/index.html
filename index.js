
setup();

const position = {
	x: 100,
	y: 100,
	r: 40
}

let dx = 1;
let dy = 1; 

function ball(){

	if(position.x + position.r >= canvas.width || position.x - position.r <= 0){

		dx = -dx;

	}else{

		dx += 0.1;

	}

	if(position.y + position.r >= canvas.height || position.y - position.r <= 0){

		dy = -dy;

	}else{

		dy += 0.1;

	}

	fillColor("salmon");
	circle(position.x,position.y,position.r);

}

function main(){

	// melakukan set animasi
	requestAnimationFrame(main);
	fillColor("rgba(0,0,0,0.09)");
	box(0,0,canvas.width,canvas.height);
	// clear();

	position.x += dx;
	position.y += dy;

	ball();

}

main();



