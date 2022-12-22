const liczba_1 = document.querySelector('#liczba_1');
const liczba_2 = document.querySelector('#liczba_2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let l1 = parseInt(liczba_1.value);
    let l2 = parseInt(liczba_2.value);
    wynik.innerHTML = kolory(l1, l2);
});

function kolory(a, b){
    if(a > b){
        return wynik.innerHTML = `<span id="wieksze">${a}</span>, <span id="mniejszy">${b}</span>`;
    } else if(a < b){
        return wynik.innerHTML = `<span id="mniejszy">${a}</span>, <span id="wieksze">${b}</span>`;
    } else{
        return wynik.innerHTML = `<span id="rowne">${a}</span>, <span id="rowne">${b}</span>`;
    }
}