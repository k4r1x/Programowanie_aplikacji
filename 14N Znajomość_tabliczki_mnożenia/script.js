const odpowiedz = document.querySelector('#odp');
const liczbaDoZgadniecia = document.querySelector('#liczbaDoZgadniecia');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
let l1 = Math.floor(Math.random()*10+1);
let l2 = Math.floor(Math.random()*10+1);

dzialanie(l1, l2);

btn.addEventListener('click', function(){
    let odp = Number(odpowiedz.value);

    if(odp === l1 * l2){
        wynik.innerHTML = `🟢 Poprawny wynik! 🟢`;
    } else{
        wynik.innerHTML = `🔴 Źle, spróbuj jeszcze raz! 🔴`;
    }
});

function dzialanie(l1, l2){
    liczbaDoZgadniecia.innerHTML = `Liczby do obliczenia: ${l1} * ${l2}`;
};