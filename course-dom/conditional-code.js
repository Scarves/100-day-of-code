const myName = 'Max';

if (myName === 'Max'){
    console.log('Hello');
}

let isLoggedIn = true

if (!isLoggedIn) {
    console.log('User is NOT logged in!');
}

const enteredUserName = ''; //'' = 0 = false
// '0' = 1 = true
//'false' = 1 = true

if (enteredUserName) { //hasil false tidak akan tampil di console
    console.log('Input is valid!'); //karna truthty falsy values js
}