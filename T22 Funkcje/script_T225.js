const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    wynik.innerHTML = `Wspólny dzielnik a i b wynosi: ${Euklides(a, b)}`;
});

function Euklides(a, b){
    while(a !== b){
        if(a > b){
            a -= b;
        } else{
            b -= a;
        }
    }
    return a;
}