let age = 32;
let userName = 'Alfi';
let hobbies = ['Sports','Cooking','Reading'];
let job = { 
    title: 'Developer', 
    place: 'New York', 
    salary: 50000 
};

let adultYears;

function calculateAdultYears() {
    adultYears = age - 18
}

calculateAdultYears();
alert(adultYears);

age = 45;
calculateAdultYears();

alert(adultYears);