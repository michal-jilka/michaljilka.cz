// Rotating words animation
const words = ['projects', 'features', 'strategy', 'results', 'value'];
let currentWordIndex = 0;

const rotatingWordElement = document.getElementById('rotatingWord');

function rotateWord() {
  // Add fade-out class
  rotatingWordElement.classList.remove('fade-in');
  rotatingWordElement.classList.add('fade-out');
  
  // After fade-out animation, change the word and fade in
  setTimeout(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    rotatingWordElement.textContent = words[currentWordIndex];
    rotatingWordElement.classList.remove('fade-out');
    rotatingWordElement.classList.add('fade-in');
  }, 300);
}

// Start with fade-in
rotatingWordElement.classList.add('fade-in');

// Rotate words every 2.5 seconds
setInterval(rotateWord, 2500);
