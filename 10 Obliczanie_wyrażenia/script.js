const wartx = document.querySelector('#wartx');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let x = parseFloat(wartx.value);
    x = x**2/(1+Math.abs(x))**2;
    wynik.innerHTML = x;
});