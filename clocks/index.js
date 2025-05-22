// Segment configuration for digits 0-9
const digitSegments = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'g', 'e', 'd'],
  3: ['a', 'b', 'g', 'c', 'd'],
  4: ['f', 'g', 'b', 'c'],
  5: ['a', 'f', 'g', 'c', 'd'],
  6: ['a', 'f', 'g', 'c', 'd', 'e'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'd', 'f', 'g']
};

function updateLCD() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  updateDigit('hour1', hours[0]);
  updateDigit('hour2', hours[1]);
  updateDigit('min1', minutes[0]);
  updateDigit('min2', minutes[1]);
}

function updateDigit(id, number) {
  const digit = document.getElementById(id);
  const segments = digitSegments[number];
  
  digit.querySelectorAll('.segment').forEach(segment => {
    segment.classList.toggle('active', segments.includes(segment.dataset.segment));
  });
}

// Initialize digits
document.querySelectorAll('.digit').forEach(digit => {
  // Create segments for each digit
  const segments = 'abcdefg'.split('').map(seg => {
    const div = document.createElement('div');
    div.className = `segment ${seg}`;
    div.dataset.segment = seg;
    return div;
  });
  
  digit.append(...segments);
});

// Analog Hand Rotation
function updateAnalog() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  document.querySelector('.second').style.transform = 
    `rotate(${(seconds * 6)}deg)`;
  document.querySelector('.minute').style.transform = 
    `rotate(${(minutes * 6 + seconds * 0.1)}deg)`;
  document.querySelector('.hour').style.transform = 
    `rotate(${(hours * 30 + minutes * 0.5)}deg)`;
}

// Update every second
setInterval(() => {
  updateLCD();
  updateAnalog();
}, 1000);

// Initial update
updateLCD();
updateAnalog();