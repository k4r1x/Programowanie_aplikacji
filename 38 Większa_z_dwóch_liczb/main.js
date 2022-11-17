const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   let a = parseInt(liczba_a.value);
   let b = parseInt(liczba_b.value);

    if(a>b){
        wynik.innerHTML = `a jest więszke od b`;
    } else{
        if(a<b){
            wynik.innerHTML = `b jest większe od a`;
        }
        else{
            wynik.innerHTML = `a jest równa b`;
        }
    }
});