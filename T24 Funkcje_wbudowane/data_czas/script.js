let czas = new Date();
const godziny = czas.getHours();
const minuty =  czas.getMinutes();
const sekundy = czas.getSeconds();

let g = document.querySelector('#godziny');
let m = document.querySelector('#minuty');
let s = document.querySelector('#sekundy');
let cz = document.querySelector('#czas');

cz.innerHTML = `${g} : ${m} : ${s}`;