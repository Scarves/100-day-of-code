// loop for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Max', 'Anna', 'Joel'];

// loop for of
for (const user of users){
    console.log(user);
}

// looping array selain menggunakan for of
// for (let i = 0; i < someArray.length; i++) {
//     console.log(someArray[i]);
// }

const loggedInUser = {
    name: 'Alfi',
    age: 24,
    isAdmin: true
};

//for in loop
for (const propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

// while loops
let isFinished = false;
while (!isFinished){
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');