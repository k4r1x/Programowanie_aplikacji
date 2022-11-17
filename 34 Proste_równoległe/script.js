const liczba_a1 = document.querySelector('#liczba_a1');
const liczba_b1 = document.querySelector('#liczba_b1');
const liczba_a2 = document.querySelector('#liczba_a2');
const liczba_b2 = document.querySelector('#liczba_b2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   let a1 = parseFloat(liczba_a1.value);
   let b1 = parseFloat(liczba_b1.value);
   let a2 = parseFloat(liczba_a2.value);
   let b2 = parseFloat(liczba_b2.value);

    if(a1 === a2)
        wynik.innerHTML = `Proste są równoległe!`;
    else
        wynik.innerHTML = `Proste nie są równoległe!`;
});