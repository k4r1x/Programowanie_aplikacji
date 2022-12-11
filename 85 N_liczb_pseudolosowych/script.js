const liczba_n = document.querySelector('#liczba_n');
const liczba_min = document.querySelector('#liczba_min');
const liczba_max = document.querySelector('#liczba_max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let n = parseInt(liczba_n.value);   let min = parseInt(liczba_min.value); let max = parseInt(liczba_max.value);
    wynik.innerHTML = ``;
    for(let i=0; i<n; i++){
        wynik.innerHTML += `Liczba ${i+1} = ` + Math.floor(Math.random() * (max+1-min) + min) + `<br>`;
    }
});