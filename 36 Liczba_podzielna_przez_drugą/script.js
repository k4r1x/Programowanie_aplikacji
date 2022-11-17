const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    if(b===0) {
        wynik.innerHTML = `Nie mozna podzielić przez zero!!!!`;
    } else{
            if (a % b === 0) {
                wynik.innerHTML = `Liczba a jest podzielna przez b!!!!`;
            } else{
                wynik.innerHTML = `Liczba a nie jest podzielna przez b!!!!`;
            }
        }
});