const h1 = document.getElementById('can');
const darkModeButton = document.getElementById('dark');
let darkModeEnabled = false;

function handleMouseMove(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    h1.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('touchmove', handleMouseMove);

window.addEventListener('click', (e) => {
    const value1 = Math.floor(Math.random() * 255 + 1);
    const value2 = Math.floor(Math.random() * 255 + 1);
    const value3 = Math.floor(Math.random() * 255 + 1);
    h1.style.color = `rgb(${value1},${value2},${value3})`;
});

const inputText = document.getElementById('inputText');

inputText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const palavra = inputText.value.trim();
        h1.textContent = palavra;
        inputText.value = ''; 
    }
});

document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });



const darkButton = document.getElementById('dark');
let isDarkMode = false;

darkModeButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeButton.textContent = 'Dark mode';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeButton.textContent = 'White mode';
    }
});


