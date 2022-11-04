const imie = document.querySelector('#imie');
const wiek = document.querySelector('#wiek');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    wynik.innerHTML = `<h1>Witaj na mojej stronie</h1><br> Masz na imię ${imie.value}.<br> Masz ${wiek.value} lat.`
});