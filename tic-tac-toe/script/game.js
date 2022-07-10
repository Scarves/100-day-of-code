function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Tolong masukan nama kedua pemain')
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectedGameField(event) {
    if (event.target.tagName !== 'LI') {
        return;
    }
    
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row -1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert ('Tolong pilih tempat yang kosong!');
        return;
    }
    
    selectedField.textContent = players[activePlayer].symbol; //player[0]
    selectedField.classList.add('disabled');


    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    

    switchPlayer();
}