console.log('proba dzialania');
const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let iloraz;
    let wynik_tekst = "";
    if(Number(liczba_b.value)===0){
        wynik_tekst = "nie dzielę przez zero";
        wynik.innerHTML = wynik_tekst;
    }
    else{
        iloraz = (Number(liczba_a.value)) / (Number(liczba_b.value));
        let wynik_tekst = `
                        dzielna = ${liczba_a.value} <br>
                        dzielnik = ${liczba_b.value} <br>
                        iloraz = ${iloraz} <br>
                        iloraz zaokrąglony do dwóch miejsc po przecinku = ${iloraz.toFixed(2)}`;
        wynik.innerHTML = wynik_tekst;
    }
    //wynik.innerHTML = wynik_tekst;
});