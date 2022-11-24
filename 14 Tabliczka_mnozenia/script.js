const wartosc_x = document.querySelector('#wartosc_x');
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function(){
    let a = parseInt(Math.floor(wartosc_x.value));
    wynik.innerHTML = `x = ${a} <br>`;
    for(let i=0; i<=11; i++){
        wynik.innerHTML += `${i} * ${a} = ${i*a} <br>`;
    }
});