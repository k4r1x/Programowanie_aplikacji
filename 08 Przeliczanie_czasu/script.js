console.log('test');
const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let liczbaa = parseInt(liczba.value);
    let g = Math.floor(liczbaa/3600);
    let sekundy_cale = liczbaa%3600;
    let m = Math.floor(sekundy_cale/60);
    let s = sekundy_cale%60;

    let wynik_tekst = `Wynik: ${g} g ${m} m ${s} s`;
    wynik.innerHTML = wynik_tekst;
});