let instrunments = document.getElementById('container').children;
let lastSound = null;
let mixState = false;
let mix = false;

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
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 		instrunments[i].addEventListener('pointerup', playSound);
	}else{
 		instrunments[i].addEventListener('click', playSound);
	}
	
	
}
let mixMusic = ()=>{
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
}


let mixer = document.getElementById('mix');
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  mixer.addEventListener('pointerup', mixMusic);
}else{
  mixer.addEventListener('click', mixMusic);
}




