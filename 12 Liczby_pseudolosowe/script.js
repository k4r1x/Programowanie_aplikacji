const min = document.querySelector('#min');
const max = document.querySelector('#max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
let p1, p2, p3, p4, p5;

btn.addEventListener('click', function(){
    let a = parseInt(min.value);
    let b = parseInt(max.value);
    p1 = Math.floor(Math.random()*(b-a+1)+a);
    p2 = Math.floor(Math.random()*(b-a+1)+a);
    p3 = Math.floor(Math.random()*(b-a+1)+a);
    p4 = Math.floor(Math.random()*(b-a+1)+a);
    p5 = Math.floor(Math.random()*(b-a+1)+a);

    let suma, iloczyn, srednia;
    suma = p1 + p2 + p3 + p4 + p5;
    iloczyn = p1 * p2 * p3 * p4 * p5;
    srednia = suma/5;

    wynik.innerHTML = `p1 = ${p1} <br>
                        p2 = ${p2} <br>
                        p3 = ${p3} <br>
                        p4 = ${p4} <br>
                        p5 = ${p5} <br>
                        suma = ${suma} <br>
                        iloczyn = ${iloczyn} <br>
                        srednia = ${srednia}`;
});