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
anchorElement = document.querySelector('external-id');
anchorElement.href = 'https://academind.com';

//add an element
//1. buat element baru

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://twitter.com';
newAnchorElement.textContent = 'This leads to twitter!';

//2. mendapatkan akses ke parent element yang menyimpan element baru

let firstParagraph = document.querySelector('p');


//3. memasukan element baru ke dalam parent element content

firstParagraph.append(newAnchorElement);


//remove element
//1. memilih element yang ingin dihapus

let firstH1Element = document.querySelector('h1');

//2. hapus

firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); //untuk browser lama
