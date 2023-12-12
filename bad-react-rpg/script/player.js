const player = document.getElementById('player');

addEventListener('keypress', event => {
    if (keypress === 'enter') {
        player.style.backgroundColor = 'red'
    }
});