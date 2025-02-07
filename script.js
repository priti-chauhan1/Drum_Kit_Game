
const sounds = {
  w: new Audio('./sounds/beep-09.wav'),
  a: new Audio('./sounds/gammond-170181.mp3'), 
  s: new Audio('./sounds/bubble-bobble-139880.mp3'), 
  d: new Audio('./sounds/sword-sound-effect-1-234987.mp3'), 
  j: new Audio('./sounds/button-4-214382.mp3'),
  k: new Audio('./sounds/click-124467.mp3'), 
  l: new Audio('./sounds/level-passed-142971.mp3') 
};
function playSound(key) {
  const sound = sounds[key];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }else{
    alert(`Error: No sound is assigned to the key/button "${key.toUpperCase()}". Please try another key.`);
  }
}
const drumPads = document.querySelectorAll('.drum-pad');
drumPads.forEach(pad => {
  pad.addEventListener('click', function () {
    const key = this.id.toLowerCase(); 
    playSound(key);
  });
});
document.addEventListener('keydown', function (event) {
  const key = event.key.toLowerCase(); 
  playSound(key);
});

