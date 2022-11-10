const liczba = document.querySelector('#liczba');
const procent = document.querySelector('#procent');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let wyink_dzialania = liczba.value * (procent.value/100);
    wynik.innerHTML = `${procent.value}% z ${liczba.value} to: ${wyink_dzialania}`;
});