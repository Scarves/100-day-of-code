function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Tolong masukan nama kedua pemain')
        return;
    }
    gameAreaElement.style.display = 'block';

}