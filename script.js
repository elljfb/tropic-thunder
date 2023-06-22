var currentAudio;

function playSound(soundFile) {
  if (currentAudio) {
    currentAudio.pause();
  }
  
  currentAudio = new Audio(soundFile);
  currentAudio.play();
}