const liczbaa = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let liczba = parseInt(liczbaa.value);

    if(liczba >=10 && liczba<=99){
        if(liczba%2===0){
            wynik.innerHTML = `Liczba jest dwucyfrowa i jest parzysta!`;
        } else{
            wynik.innerHTML = `Liczba jest dwucyfrowa, ale nie jest parzysta!`;
        }
    } else{
        wynik.innerHTML = `Liczba nie jest dwucyfrowa!`;
    }
});