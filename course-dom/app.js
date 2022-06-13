//membuat event click
let paragraphElement = document.querySelector('p'); //mendapatkan akses ke p

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked!';
    console.log('paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);


//menambahkan event user input
let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data; //ini beda
    console.log(enteredText);
    // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);

