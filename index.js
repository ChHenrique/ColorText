const h1 = document.getElementById('can');

window.addEventListener('mousemove', function(e) {
    h1.style.transform = `rotateX(${e.y}deg) rotateY(${e.x}deg)`;
});

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
