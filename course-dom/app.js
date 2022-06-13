// console.dir(window.document);

//document.body.children[1].children[0].href = 'https://google.com';
// console.dir(document);
// alert();
// window.alert();


//mencari DOM dengan memlilih HTML element dengan id hanya satu element
//untuk mencari spesifik element
let achorElement = document.getElementById('external-link');
achorElement.href = 'https://google.com';

//mencari DOM dengan memilih HTML element yang sesuai pertama dengan menggunakan css selector atau html element
//untuk mencari sesuai kondisi
anchorElement = document.querySelector('#external-id');
anchorElement.href = 'https://academind.com';