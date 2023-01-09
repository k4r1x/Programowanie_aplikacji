const date1 = new Date("22 March 2015");
const date2 = new Date("10 September 2010");
const date3 = new Date("10 September 2010");

console.log(date1 < date2);

console.log(date2.getTime() === date3.getTime());

const birthdate = new Date(USER.birthdate);
const today = new Date();

if(today.getMonth() === birthdate.getMonth() && today.getDate() === birthdate.getDate()) {
    console.log("Dzisiaj urodziny!");
}


const imie1 = document.querySelector('#imie1');
const imie2 = document.querySelector('#imie2');
const urodziny1 = document.querySelector('#urodziny1');
const urodziny2 = document.querySelector('#urodziny2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){

});