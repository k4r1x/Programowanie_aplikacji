const liczbax = document.querySelector('#liczbax');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    x = Number(liczbax.value); wynik.innerHTML = ``;
    for(let i=0; i<x; i++){
        for(let j=0; j<x; j++){
            if(i===j){
                wynik.innerHTML += `1`;
            } else{
                wynik.innerHTML += `0`;
            }
        }
        wynik.innerHTML += `<br>`;
    }
});