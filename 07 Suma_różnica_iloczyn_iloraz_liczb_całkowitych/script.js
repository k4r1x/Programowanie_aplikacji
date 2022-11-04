console.log('test');
const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let suma, roznica, iloczyn, iloraz;
    let wynik_tekst = "";
    suma = (Number(liczba_a.value)) + (Number(liczba_b.value));
    roznica = (Number(liczba_a.value)) - (Number(liczba_b.value));
    iloczyn = (Number(liczba_a.value)) * (Number(liczba_b.value));
    if(Number(liczba_b.value) === 0){
        iloraz = "nie dzielę przez zero!";
    }
    else {
        iloraz = (Number(liczba_a.value)) / (Number(liczba_b.value));
    }
    wynik_tekst = `
                    a: ${liczba_a.value} <br>
                    b: ${liczba_b.value} <br>
                    suma: ${suma} <br>
                    róznica: ${roznica} <br>
                    iloczyn: ${iloczyn} <br>
                    iloraz: ${iloraz}`;
    wynik.innerHTML = wynik_tekst;
})