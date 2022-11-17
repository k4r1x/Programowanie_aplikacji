const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);

    if(a>=0){
        wynik.innerHTML = `Wartość bezwględna liczby a wynosi: ${a}`;
    } else{
        wynik.innerHTML = `Wartość bezwględna liczby a wynosi: ${Math.abs(a)}`;
    }
});