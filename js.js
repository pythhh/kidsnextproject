const word = document.querySelector('#word').innerHTML;
document.querySelector('#word').innerHTML = 'Hi!';
let word_length = word.length;
for (var i = 3; i < word_length; i++) {
	let time = i*75;
	let char = word[i];
	setTimeout(function(){
		document.querySelector('#word').innerHTML = document.querySelector('#word').innerHTML+char;
	},600+time);
}

var bubble = [];

function setup(){
	createCanvas(600,400);
}

function mousePressed(){
	var b = new bubble(mouseX, mouseY);
	bubble.push(b)
}

function draw(){
	background(0);
	for (var i = bubbles.length - 1; i>= 0 ; i--){
		bubbles[i].update();
		bubbles[i].display();
	}
}