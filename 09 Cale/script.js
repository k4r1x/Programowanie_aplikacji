const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   cale = parseFloat(liczba.value);
   wynik.innerHTML = `${cale} cali to ${(cale*25.3995).toFixed(6)} mm`;
});