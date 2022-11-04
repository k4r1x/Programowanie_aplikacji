const a = document.querySelector('#liczba_a');
const b = document.querySelector('#liczba_b');
const c = document.querySelector('#liczba_c');
const d = document.querySelector('#liczba_d');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let srednia = (Number(a.value) + Number(b.value) + Number(c.value) + Number(d.value)) / 4;

     wynik_tekst = `
                     Średnia wynosi: ${srednia} <br>
                     Średnia zaokrąglona wynosi: ${srednia.toFixed(3)}`;
     wynik.innerHTML = wynik_tekst;
});