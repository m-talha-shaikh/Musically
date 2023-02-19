let instrunments = document.getElementById('container').children;
let lastSelect = null;

let playSound = (event, box)=>{
	let id = event.target.getAttribute('id')
	let idName = id + "Sound";
	let sound = document.getElementById(idName);
	sound.play();
	lastSelect = event.target;
}

for(let i = 0; i < 10 ; i++){
	instrunments[i].addEventListener('click', playSound);
}

