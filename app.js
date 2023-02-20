let instrunments = document.getElementById('container').children;
let lastSound = null;
let mixState = false;
let mix = false;

	console.log(mix)
	console.log(mixState)

let playSound = (event, box)=>{
	if(mix === false){
		if(lastSound != null){
			lastSound.pause()
		}
	}

	let id = event.target.getAttribute('id')
	let idName = id + "Sound";
	let sound = document.getElementById(idName);
	sound.play();
	lastSound = sound;
}

for(let i = 0; i < 10 ; i++){
	instrunments[i].addEventListener('click', playSound);
}

let mixer = document.getElementById('mix');
mixer.addEventListener('click', ()=>{
	if(mixState === true){
		mixState = false;
		mix = false;
		mixer.style.backgroundColor = 'lavender';
	}
	else{
		mixState = true;
		mix = true;
		mixer.style.backgroundColor = 'lightblue';
	}
	console.log(mix)
	console.log(mixState)
})

