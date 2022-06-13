let paragraphElement = document.querySelector('p'); //mendapatkan akses ke p

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked!';
}

paragraphElement.addEventListener('click', changeParagraphText);
