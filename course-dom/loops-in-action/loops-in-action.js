// latihan pertama : menjumlahkan angka

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i<= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';


}

calculateSumButtonElement.addEventListener('click', calculateSum);

// latihan kedua: highlight link

const highLinksButtonElement = document.querySelector('#highlight-links button');

function highLightLinks() {
    const archorElements = document.querySelectorAll('#highlight-links a'); //return all the matching element

    for (const archorElement of archorElements) {
        archorElement.classList.add('highlight');
    }
}

highLinksButtonElement.addEventListener('click', highLightLinks);

//display user data

const dummyUserData = {
    firstName: 'Alfi',
    lastName: 'Nurfazri',
    age: 24
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);