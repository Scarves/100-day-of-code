function openPlayerConfig(event) {
    editedPlayer  = +event.target.dataset.playerid; //+'1' => 1 string jadi number
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('eror');
    erorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    //formData blueprint untuk form
    const enteredPlayername = formData.get('username').trim();
    //trim memotong whitespace '  Alfi   ' => 'Alfi' || 'Alfi Nurfazri' => 'Alfi Nurfazri'
    //hanya memotong di depan atau di belakang agar user gak bisa memasukan blank
    if (!enteredPlayername){ //enteredPlayername === ''
        event.target.firstElementChild.classList.add('eror');
        erorOutputElement.textContent = 'Masukan nama kembali!'
        return;
    } 
    
    const updatedPlayerDataElemen = document.getElementById('player-' + editedPlayer + '-data')
    updatedPlayerDataElemen.children[1].textContent = enteredPlayername;

    // if (editedPlayer === 1) {
    //     players[0];
    // } else {
    //     players[1].name = enteredPlayername;
    // }

    players[editedPlayer - 1].name = enteredPlayername;
    
    closePlayerConfig();
}