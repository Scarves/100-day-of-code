function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('eror');
    erorOutputElement.textContent = '';
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
    



    
}